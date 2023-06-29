import { SystemStyleObject } from "@chakra-ui/react";
import pxToRem from "@utils/pxToRem";

export const slideStyle = {
	//top: 71,
	width: "47%",
};
const wrapper = (headerOutOfView: boolean, isScrollUp: boolean): SystemStyleObject => ({
	transition: `bacground-color .5s ease-in-out,
			  backdrop-filter .5s ease-in-out,
			  box-shadow .5s ease-in-out,
			  transform 1s ease-in`,
	px: '1.5rem',
	my: '1rem',
	mx: 2,
	borderRadius: '4px',
	alignItems: 'center',
	justifyContent: 'space-between',
	pos: 'sticky',
	flexGrow: 1,
	top: '5px',
	h: pxToRem(75),
	outline: headerOutOfView ? '.1px solid white' : '',
	zIndex: 10,
	boxShadow: headerOutOfView ? 'xl' : '',
	transform: isScrollUp ? 'translateY(0em)' : 'translateY(-10em)',
	_before: {
	  content: '""',
	  position: 'absolute',
	  top: 0,
	  left: 0,
	  right: 0,
	  bottom: 0,
	  zIndex: -1,
	  backdropFilter: headerOutOfView ? `saturate(200%) blur(${pxToRem(30)})` : '',
	  bgColor: headerOutOfView ? 'blackAlpha.300' : 'none'
	}
  });