import { Component, ElementRef, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { CarouselModule ,OwlOptions } from 'ngx-owl-carousel-o';
import {GridType, GridsterComponent, GridsterItemComponent,CompactType,GridsterPush} from 'angular-gridster2';
import { CommonModule } from '@angular/common';
import { GridsterConfig, GridsterItem ,DisplayGrid,}  from 'angular-gridster2';
import { GridStack } from 'gridstack';
@Component({
  selector: 'app-dashboard-creation',
  standalone: true,
  imports: [CarouselModule,GridsterComponent, GridsterItemComponent, CommonModule,  ],
  templateUrl: './dashboard-creation.component.html',
  styleUrl: './dashboard-creation.component.scss'
})
export class DashboardCreationComponent implements OnInit{
 

  options!: GridsterConfig;
  dashboard!: Array<GridsterItem>;
  itemToPush!: GridsterItemComponent;

   resizeEvent: EventEmitter<GridsterItem> = new EventEmitter<GridsterItem>();
   
   
   @ViewChild('cataSubNav') cataSubNav!: ElementRef ;
   constructor() { }
   isPrevButtonHidden = true;
   isNextButtonHidden = false;
 
 

  ngOnInit() {
  

    this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      pushItems: true,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      }
    };

    this.dashboard = [
      {cols: 2, rows: 1, y: 0, x: 0},
      {cols: 2, rows: 2, y: 0, x: 2}
    ];
  }

 
  

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event:any, item:any) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({x: 0, y: 0, cols: 1, rows: 1});
  }

  initItem(item: GridsterItem, itemComponent: GridsterItemComponent) {
    this.itemToPush = itemComponent;
  }

  pushItem() {
    const push = new GridsterPush(this.itemToPush); // init the service
    this.itemToPush.$item.rows += 4; // move/resize your item
    if (push.pushItems(push.fromNorth)) { // push items from a direction
      push.checkPushBack(); // check for items can restore to original position
      push.setPushedItems(); // save the items pushed
      this.itemToPush.setSize();
      this.itemToPush.checkItemChanges(this.itemToPush.$item, this.itemToPush.item);
    } else {
      this.itemToPush.$item.rows -= 4;
      push.restoreItems(); // restore to initial state the pushed items
    }
    push.destroy(); // destroy push instance
    // similar for GridsterPushResize and GridsterSwap
  }








  onScroll(event: any) {
    const scrollLeft = event.target.scrollLeft;
    const scrollWidth = event.target.scrollWidth;
    const innerWidth = event.target.innerWidth;

    if (scrollLeft + innerWidth >= scrollWidth) {
      this.isNextButtonHidden = true;
    } else {
      this.isNextButtonHidden = false;
    }

    if (scrollLeft === 0) {
      this.isPrevButtonHidden = true;
    } else {
      this.isPrevButtonHidden = false;
    }
  }

  scrollNext() {
    this.cataSubNav.nativeElement.scrollLeft += 460;
    behavior: 'smooth' // Smooth scrolling animation
  }

  scrollPrevious() {
    this.cataSubNav.nativeElement.scrollLeft -= 460;
    behavior: 'smooth' // Smooth scrolling animation
  }




  grid1 !: GridStack;
  ngAfterViewInit(): void {
    const options = {
      column: 6,
      minRow: 1, // don't collapse when empty
      cellHeight: 70,
      disableOneColumnMode: true,
      float: false,
      // dragIn: '.sidebar .grid-stack-item', // add draggable to class
      // dragInOptions: { revert: 'invalid', scroll: false, appendTo: 'body', helper: 'clone' }, // clone
      removable: '.trash', // true or drag-out delete class
      acceptWidgets: function(el: any) {
        return true;
      } // function example, but can also be: true | false | '.someClass' value
    };
  
  }
}
