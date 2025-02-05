// components/newButton.stories.tsx

import {ComponentMeta, ComponentStory} from "@storybook/react";
import NewButton from "./WordButton";

export default {
	title: "Components/NewButton", // story 이름
	component: NewButton,
};

const Template = (args) => <NewButton {...args} />;

export const Small = Template.bind({});
Small.args = {
	size: "small",
	label: "small",
}; // Small의 props 지정

export const Large = Template.bind({});
Large.args = {
	size: "large",
	label: "large",
}; // Large의 props 지정
