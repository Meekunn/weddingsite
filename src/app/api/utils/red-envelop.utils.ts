import { Allocation, GOODIES_STRATEGY_ENUM } from "@prisma/client";

type TRedEnvelope = Array<Partial<Allocation>>;

function replaceDigits(value: number) {
    let num = value;
    const remainder = num % 50;
    if (remainder !== 0) {
        num -= remainder;
    }
    return num;
}
export function shareRedEnvelope(
    goodieId: string,
    strategy: GOODIES_STRATEGY_ENUM,
    amount: number,
    expiresAt?: Date,
    packets: number = 10,
    minimum: number = 100
): TRedEnvelope {
    if (amount < 100 || packets < 1) {
        throw new Error("Invalid amount or number of recipients");
    }

    const remainderAfterSharing = amount / packets
    if (remainderAfterSharing < 100) {
        throw new Error("Amount can not be shared, please increase the amount to be shared or reduce the number of packets");
    }

    const redEnvelope: Array<Partial<Allocation>> = [];

    // Equal Distribution
    if (strategy === GOODIES_STRATEGY_ENUM.EQUAL) {
        let amountForEachRecipient = amount / packets;
        amountForEachRecipient = Math.floor(amountForEachRecipient);

        for (let i = 0; i < packets; i++) {
            redEnvelope.push({ amount: String(amountForEachRecipient), goodieId, status: "UNCLAIMED", position: i + 1, expiresAt,  });
        }

        return redEnvelope;
    }

    // Random Distribution
    const acuraMinimum = minimum * packets;
    const randomisableAmount = amount - acuraMinimum;
    let sharableAmountLeft = randomisableAmount;
    let currentBalance = amount;

    for (let i = 0; i < packets - 1; i++) {
        let randomAmount = Math.random() * sharableAmountLeft;

        sharableAmountLeft -= randomAmount;

        let finalizedRandomAmount = randomAmount + minimum;
        finalizedRandomAmount = Math.floor(finalizedRandomAmount);
        finalizedRandomAmount = replaceDigits(finalizedRandomAmount);
        currentBalance -= finalizedRandomAmount;

        redEnvelope.push({ amount: String(finalizedRandomAmount), goodieId, status: "UNCLAIMED", position: i + 1, expiresAt,  });
    }

    currentBalance = Math.round(currentBalance);
    redEnvelope.push({ amount: String(currentBalance), goodieId, status: "UNCLAIMED", position: redEnvelope.length + 1, expiresAt,  });

    return redEnvelope;
}
