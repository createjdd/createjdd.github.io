import Checkbox from '..';
import CheckboxGroup from '../../checkbox-group';
import { mount, later } from '../../../test/utils';

test('switch checkbox', async () => {
  const wrapper = mount(Checkbox);

  wrapper.vm.$on('input', value => {
    wrapper.setData({ value });
  });

  const icon = wrapper.find('.van-checkbox__icon');
  icon.trigger('click');
  await later();
  icon.trigger('click');
  await later();
  expect(wrapper.emitted('input')).toEqual([[true], [false]]);
  expect(wrapper.emitted('change')).toEqual([[true], [false]]);
});

test('disabled', () => {
  const wrapper = mount(Checkbox, {
    propsData: {
      disabled: true
    }
  });

  wrapper.find('.van-checkbox__icon').trigger('click');
  expect(wrapper.emitted('input')).toBeFalsy();
});

test('label disabled', () => {
  const wrapper = mount(Checkbox, {
    slots: {
      default: '<div />'
    },
    propsData: {
      labelDisabled: true
    }
  });

  wrapper.find('.van-checkbox__label').trigger('click');
  expect(wrapper.emitted('input')).toBeFalsy();
});

test('checkbox group', async () => {
  const wrapper = mount({
    template: `
      <checkbox-group v-model="result" :max="2">
        <checkbox v-for="item in list" :key="item" :name="item"></checkbox>
      </checkbox-group>
    `,
    components: {
      Checkbox,
      CheckboxGroup
    },
    data() {
      return {
        result: [],
        list: ['a', 'b', 'c']
      };
    }
  });

  const icons = wrapper.findAll('.van-checkbox__icon');
  icons.at(0).trigger('click');
  await later();
  icons.at(1).trigger('click');
  await later();
  icons.at(2).trigger('click');
  expect(wrapper.vm.result).toEqual(['a', 'b']);

  await later();
  icons.at(0).trigger('click');
  await later();
  expect(wrapper.vm.result).toEqual(['b']);
});

test('checkbox group unbind', async () => {
  const wrapper = mount({
    template: `
      <checkbox-group v-model="result" :max="2">
        <checkbox v-for="item in list" :key="item" :name="item" />
        <checkbox :bind-group='false' v-model="value" />
      </checkbox-group>
    `,
    components: {
      Checkbox,
      CheckboxGroup
    },
    data() {
      return {
        result: [],
        value: false,
        list: ['a', 'b', 'c']
      };
    }
  });

  const icons = wrapper.findAll('.van-checkbox__icon');
  icons.at(3).trigger('click');
  await later();
  expect(wrapper.vm.result).toEqual([]);
  expect(wrapper.vm.value).toBeTruthy();
});

test('click event', () => {
  const onClick = jest.fn();
  const wrapper = mount(Checkbox, {
    listeners: {
      click: onClick
    }
  });

  wrapper.trigger('click');
  expect(onClick).toHaveBeenCalledTimes(1);

  const icon = wrapper.find('.van-checkbox__icon');
  icon.trigger('click');
  expect(onClick).toHaveBeenCalledTimes(2);
});
