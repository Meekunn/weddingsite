interface INavbar {
	isScrolled: boolean;
}

interface IMobileNavbar {
	isScrolled: boolean;
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
