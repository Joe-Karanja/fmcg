import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from '../services/layout.service';

@Directive({
  selector: '[portalHeaderTitle]'
})
export class PortalHeaderTitleDirective implements OnDestroy {
  titleSubscription: Subscription;

  constructor(
    private layoutService: LayoutService,
    private el: ElementRef
  ) {
    this.titleSubscription = this.layoutService.getTitle()
      .subscribe(title => {this.el.nativeElement.innerHTML = title;
      console.log(title)});
  }

  ngOnDestroy(): void {
    this.titleSubscription.unsubscribe();
  }
}
