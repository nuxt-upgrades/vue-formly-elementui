export default {
  render(h) {
    let toReturn = false;
    if (this.message) {
      toReturn = h('span', {
        class: 'help-block form-text text-danger',
      }, this.message);
    }
    return toReturn;
  },
  props: ['field', 'form'],
  computed: {
    message() {
      let message = false;
      if (
        !(this.field in this.form.$errors)
        || !(this.field in this.form)
        || this.form[this.field].$active
        || !this.form[this.field].$dirty) {
        message = false;
      } else {
        const errors = this.form.$errors[this.field];
        Object.keys(errors).some((errorKey) => {
          let result = false;
          if (typeof errors[errorKey] !== 'boolean') {
            message = errors[errorKey];
            result = true;
          }
          return result;
        });
      }
      return message;
    },
  },
};
