import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';
import { NgMessageboxComponent } from './ng-messagebox.component';

@Injectable({
  providedIn: 'root'
})

export class NgMessageboxService{
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ){}

  MessabeBox(option: any): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      const componentRef = this.componentFactoryResolver.resolveComponentFactory(NgMessageboxComponent).create(this.injector);
      componentRef.instance.ChangeOptions(option)
      componentRef.instance.confirm.subscribe((value: boolean) => {
        resolve(value);
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
      });

      this.appRef.attachView(componentRef.hostView);
      const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);
    });
  }
}