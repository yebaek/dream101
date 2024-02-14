// 'use strict';

// export default class PopUp {
//   constructor() {
//   this.popUp = document.querySelector('.pop-up');
//   this.popUpText = document.querySelector('.pop-up__message');
//   this.popUpRefresh = document.querySelector('.pop-up__refresh');

//   this.popUpRefresh.addEventListener('click', () => {
//     this.onClick && this.onClick();
//     this.hide;
//   });
//   }

//   setClickListener(onClick) {
//     this.onClick = onClick;
//   }

//   showWithText(text) {
//     this.popUpText.innerText = text;
//     this.popUp.classList.remove('pop-up--hide');
//   }

//   hide() {
//     this.popUp.classList.add('pop-up-hide');
//   }
// }

'use strict';

export default class PopUp {
  constructor() {
    this.popUp = document.querySelector('.pop-up');
    this.popUpMessage = document.querySelector('.pop-up__message');
    this.popUpRefreshBtn = document.querySelector('.pop-up__refresh');

    this.popUpRefreshBtn.addEventListener('click', () => {
      this._hide();
      this.onClick && this.onClick();
    });
  }

  setClickListener(onClick) {
    this.onClick = onClick;
  }

  showWithText(text) {
    this.popUpMessage.innerText = text;
    this.popUp.classList.remove('hide');
  }

  _hide() {
    this.popUp.classList.add('hide');
  }
}
