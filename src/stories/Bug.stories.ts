import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AppComponent } from './../app/app.component';
import { BugComponent } from './bug.component';

export default {
  title: 'Example/Page',
  component: BugComponent,
  decorators: [
    moduleMetadata({
      declarations: [AppComponent],
      imports: [],
    }),
  ],
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
});

export const App = Template.bind({});
App.args = {
};
