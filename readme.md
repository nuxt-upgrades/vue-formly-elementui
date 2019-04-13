# Vue formly for elementui

## Install
```js
cd your-nuxt-project
git clone https://github.com/nuxt-upgrades/vue-formly-elementui.git formly
npm i vue-formly
```

## config
create nuxt plugin file and paste:
```js
import Vue from 'vue'
import VueFormly from 'vue-formly';
import baseField from '@/formly/fields/baseField';
import formlyInput from '@/formly/fields/fieldInput';
Vue.use(VueFormly);
VueFormly.addType('input', formlyInput);
```

## start
example page:
```html
	<el-form ref="form" :model="form" label-width="120px">
		<formly-form 
			:form="form" 
			:model="model" 
			:fields="fields">
		</formly-form>
		<button>Submit</button>
	</el-form>
```

```js
	data: function () {
    return {
      model: {
          fname: '',
          lname: '',
      },
      form: {},
      fields: [
         {
            key: 'fname',
            type: 'input',
            templateOptions: {
              label: 'First Name',
            },
            required: true,
         },
         {
            key: 'lname',
            type: 'input',
            templateOptions: {
              label: 'Last Name',
            },
            required: true,
         }
      ]
   }
 },
```