; (function () {

  class Validator {

    constructor(_el) {
      this.el = _el;
      this.el.errors = [];
      this.el.valid = true;
      this.title = _el.getAttribute('title');
      this.required = _el.getAttribute('required') !== null;
      let pattern = _el.getAttribute('pattern');
      this.pattern = pattern ? RegExp(`${pattern}`, 'g') : false;
    }

    validate() {
      this.el.errors = [];
      this.el.valid = true;

      if (this.required && !this.el.value) {
        this.el.valid = false;
        this.el.errors.push('This field is required, please specifiy value!');
      }

      if (this.pattern && !this.pattern.test(this.el.value)) {
        this.el.valid = false;
        this.el.errors.push(this.title);
      }
    }
  }

  class MyPageDom {
    constructor() {
      this.regElementRefs();
      this.regEventHandlers();
      this.regFieldValidators();
    }

    regElementRefs() {
      this.btnOk = document.querySelector('#btn-ok');
      this.btnCancel = document.querySelector('#btn-cancel');
      this.frmInstance = document.querySelector('#frm-address');

      this.frmFields = {
        'npt-name': document.querySelector('#npt-name'),
        'npt-address1': document.querySelector('#npt-address1'),
        'npt-address2': document.querySelector('#npt-address2'),
        'npt-city': document.querySelector('#npt-city'),
        'npt-state': document.querySelector('#npt-state'),
        'npt-zip': document.querySelector('#npt-zip')
      };
    }

    regFieldValidators() {
      this.everyFormField((_field) => {
        _field.validator = new Validator(_field);
        _field.error_view = _field.closest('div').querySelector('span');
      });
    }

    regEventHandlers() {
      this.frmInstance.addEventListener('submit', (_event) => {
        _event.preventDefault();
      });

      this.btnOk.addEventListener('click', (_event) => {
        this.frmInstance.valid = true;
        this.everyFormField((_field) => {
          _field.validator.validate();
          this.frmInstance.valid = this.frmInstance.valid && _field.valid;

          if (_field.valid) {
            _field.error_view.innerHTML = ''
            _field.classList.remove('error');
            _field.classList.add('success');
          } else {
            _field.error_view.innerHTML = _field.errors.map((_err) => ' * ' + _err).join('<br/>');
            _field.classList.remove('success');
            _field.classList.add('error');
          }
        });
      });

      this.btnCancel.addEventListener('click', (_event) => {
        this.frmInstance.valid = true;
        this.everyFormField((_field) => {
          _field.value = '';
          _field.valid = true;
          _field.error_view.innerHTML = ''
          _field.classList.remove('error');
          _field.classList.remove('success');
        })
      });
    }

    everyFormField(_callback) {
      for (let key in this.frmFields) {
        if (this.frmFields.hasOwnProperty(key)) {
          _callback(this.frmFields[key])
        }
      }
    }
  }

  new MyPageDom();
})();