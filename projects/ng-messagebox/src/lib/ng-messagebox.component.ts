import { Component, EventEmitter, Output, Input } from "@angular/core";

@Component({
  selector: 'NgMessageBox',
  templateUrl: 'ng-messagebox.component.html',
  styles: [
    `
    .myModal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .myModal-content {
      background-color: #fff;
      padding: 20px;
      border-radius: 5px;
    }

    .myModal-header {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: space-between;
      padding: var(--#{$prefix}modal-header-padding);
      border-bottom: var(--#{$prefix}modal-header-border-width) solid var(--#{$prefix}modal-header-border-color);
    }
    .myModal-header.btn-close {
      padding: calc(var(--#{$prefix}modal-header-padding-y) * .5) calc(var(--#{$prefix}modal-header-padding-x) * .5);
      margin: calc(-.5 * var(--#{$prefix}modal-header-padding-y)) calc(-.5 * var(--#{$prefix}modal-header-padding-x)) calc(-.5 * var(--#{$prefix}modal-header-padding-y)) auto;
    }
    .modal-title {
      margin-bottom: 0;
      line-height: var(--#{$prefix}modal-title-line-height);
    }

    .myModal-footer {
      display: flex;
      flex-shrink: 0;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;
      padding: calc(var(--#{$prefix}modal-padding) - var(--#{$prefix}modal-footer-gap) * .5);
      background-color: var(--#{$prefix}modal-footer-bg);
      border-top: var(--#{$prefix}modal-footer-border-width) solid var(--#{$prefix}modal-footer-border-color);
    }

    .myModal-body{
      margin: 20px
    }

    .myModal-footer button{
      margin: 5px
    }

    .modal-body {
      position: relative;
      flex: 1 1 auto;
      padding: var(--#{$prefix}modal-padding);
    }

    .button-primary{
      border: 1px;
      border-radius: 6px;
      padding: 7px 14px;
      background-color: #654AFF;
      color: #FFFFFF
    }
    .button-primary:hover{
      border: 1px;
      border-radius: 6px;
      padding: 7px 14px;
      background-color: #0300AD;
      color: #FFFFFF
    }

    .button-danger{
      border: 1px;
      border-radius: 6px;
      padding: 7px 12px;
      background-color: #FF3B3B;
      color: #FFFFFF
    }
    .button-danger:hover{
      border: 1px;
      border-radius: 6px;
      padding: 7px 12px;
      background-color: #F00000;
      color: #FFFFFF
    }
    `
  ]
})

export class NgMessageboxComponent {
  @Output() confirm: EventEmitter<boolean> = new EventEmitter<boolean>();
  title?: string;
  message?: string;
  buttons: Array<button> = []
  type?: string;
  
  constructor(){

  }

  ChangeOptions(options: Options) {
    var userLang = navigator.language;

    this.title = options.title
    this.message = options.message
    this.type = options.type
    if (options.buttons == 'YesNo') {
      const yes = new button()
      yes.type = 'button'
      yes.class = 'button-primary'
      if (userLang.startsWith('es'))
        yes.text = 'Si'
      if (userLang.startsWith('en'))
        yes.text = 'Yes'
      yes.value = true
      this.buttons.push(yes)
      const no = new button()
      no.type = 'button'
      no.class = 'button-danger'
      no.text = 'No'
      no.value = false
      this.buttons.push(no)
    }
    if (options.buttons == 'AcceptCancel') {
      const accept = new button()
      accept.type = 'button'
      accept.class = 'button-primary'
      if (userLang.startsWith('es'))
        accept.text = 'Aceptar'
      if (userLang.startsWith('en'))
        accept.text = 'Accept'
      accept.value = true
      this.buttons.push(accept)
      const cancel = new button()
      cancel.type = 'button'
      cancel.class = 'button-danger'
      if (userLang.startsWith('es'))
        cancel.text = 'Cancelar'
      if (userLang.startsWith('en'))
        cancel.text = 'Cancel'
      cancel.value = false
      this.buttons.push(cancel)
    }
    if (options.type != '' || options.type != null) {
      this.type = options.type
    }
  }

  onConfirm(value: boolean) {
    this.confirm.emit(value);
  }

}

export class button {
  type: string = '';
  class: string = '';
  value: boolean = false;
  text: string = '';
}

export class Options {
  title: string = '';
  message: string = '';
  buttons: string = '';
  type: string = '';
}