import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataSource } from '../../../../lib/data-source/data-source';
import { Column } from '../../../../lib/data-set/column';
export class TitleComponent {
    constructor() {
        this.currentDirection = '';
        this.sort = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                const sortConf = this.source.getSort();
                if (sortConf.length > 0 && sortConf[0]['field'] === this.column.id) {
                    this.currentDirection = sortConf[0]['direction'];
                }
                else {
                    this.currentDirection = '';
                }
                sortConf.forEach((fieldConf) => {
                });
            });
        }
    }
    _sort(event) {
        event.preventDefault();
        this.changeSortDirection();
        this.source.setSort([
            {
                field: this.column.id,
                direction: this.currentDirection,
                compare: this.column.getCompareFunction(),
            },
        ]);
        this.sort.emit(null);
    }
    changeSortDirection() {
        if (this.currentDirection) {
            const newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
            this.currentDirection = newDirection;
        }
        else {
            this.currentDirection = this.column.sortDirection;
        }
        return this.currentDirection;
    }
}
TitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng2-smart-table-title',
                template: `
    <a href="#" *ngIf="column.isSortable"
                (click)="_sort($event)"
                class="ng2-smart-sort-link sort"
                [title]="column.tooltip || ''"
                [ngClass]="currentDirection">

      <i *ngIf="column.icon" class="icon fa fa-{{column.icon}}"></i>
      {{ column.title }}
    </a>
    <span class="ng2-smart-sort" *ngIf="!column.isSortable" [title]="column.tooltip || ''">
      <i *ngIf="column.icon" class="icon fa fa-{{column.icon}}"></i>{{ column.title }}</span>
  `,
                styles: ["a.sort.asc,a.sort.desc{font-weight:700}a.sort.asc:after,a.sort.desc:after{border:4px solid transparent;border-bottom-color:rgba(0,0,0,.3);content:\"\";display:inline-block;height:0;margin-bottom:2px;width:0}a.sort.desc:after{margin-bottom:-2px;transform:rotate(-180deg)}.icon{display:inline-flex;font-size:10px;margin-right:2px}"]
            },] }
];
TitleComponent.propDecorators = {
    column: [{ type: Input }],
    source: [{ type: Input }],
    sort: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2plY3RzL05nMlNtYXJ0VGFibGVQbHVzL25nMi1zbWFydC10YWJsZS1jbGVtYW50by9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvY2VsbHMvdGl0bGUvdGl0bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBR2pHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFtQnpELE1BQU0sT0FBTyxjQUFjO0lBakIzQjtRQW1CRSxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFHWixTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQStDM0MsQ0FBQztJQTNDQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNuQztZQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDdEUsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFFdkMsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7b0JBQ2xFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQ2xEO3FCQUFNO29CQUNMLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7aUJBQzVCO2dCQUVELFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFjLEVBQUUsRUFBRTtnQkFFcEMsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFVO1FBQ2QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ2xCO2dCQUNFLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3JCLFNBQVMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO2dCQUNoQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRTthQUMxQztTQUNGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDdEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFlBQVksQ0FBQztTQUN0QzthQUFNO1lBQ0wsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7O1lBcEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUVqQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztHQVlUOzthQUNGOzs7cUJBSUUsS0FBSztxQkFDTCxLQUFLO21CQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvZGF0YS1zZXQvY29sdW1uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmcyLXNtYXJ0LXRhYmxlLXRpdGxlJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGl0bGUuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YSBocmVmPVwiI1wiICpuZ0lmPVwiY29sdW1uLmlzU29ydGFibGVcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJfc29ydCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm5nMi1zbWFydC1zb3J0LWxpbmsgc29ydFwiXG4gICAgICAgICAgICAgICAgW3RpdGxlXT1cImNvbHVtbi50b29sdGlwIHx8ICcnXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJjdXJyZW50RGlyZWN0aW9uXCI+XG5cbiAgICAgIDxpICpuZ0lmPVwiY29sdW1uLmljb25cIiBjbGFzcz1cImljb24gZmEgZmEte3tjb2x1bW4uaWNvbn19XCI+PC9pPlxuICAgICAge3sgY29sdW1uLnRpdGxlIH19XG4gICAgPC9hPlxuICAgIDxzcGFuIGNsYXNzPVwibmcyLXNtYXJ0LXNvcnRcIiAqbmdJZj1cIiFjb2x1bW4uaXNTb3J0YWJsZVwiIFt0aXRsZV09XCJjb2x1bW4udG9vbHRpcCB8fCAnJ1wiPlxuICAgICAgPGkgKm5nSWY9XCJjb2x1bW4uaWNvblwiIGNsYXNzPVwiaWNvbiBmYSBmYS17e2NvbHVtbi5pY29ufX1cIj48L2k+e3sgY29sdW1uLnRpdGxlIH19PC9zcGFuPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgY3VycmVudERpcmVjdGlvbiA9ICcnO1xuICBASW5wdXQoKSBjb2x1bW46IENvbHVtbjtcbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xuICBAT3V0cHV0KCkgc29ydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHByb3RlY3RlZCBkYXRhQ2hhbmdlZFN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5zb3VyY2UpIHtcbiAgICAgIGlmICghY2hhbmdlcy5zb3VyY2UuZmlyc3RDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5kYXRhQ2hhbmdlZFN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5kYXRhQ2hhbmdlZFN1YiA9IHRoaXMuc291cmNlLm9uQ2hhbmdlZCgpLnN1YnNjcmliZSgoZGF0YUNoYW5nZXMpID0+IHtcbiAgICAgICAgY29uc3Qgc29ydENvbmYgPSB0aGlzLnNvdXJjZS5nZXRTb3J0KCk7XG5cbiAgICAgICAgaWYgKHNvcnRDb25mLmxlbmd0aCA+IDAgJiYgc29ydENvbmZbMF1bJ2ZpZWxkJ10gPT09IHRoaXMuY29sdW1uLmlkKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gc29ydENvbmZbMF1bJ2RpcmVjdGlvbiddO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgc29ydENvbmYuZm9yRWFjaCgoZmllbGRDb25mOiBhbnkpID0+IHtcblxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIF9zb3J0KGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY2hhbmdlU29ydERpcmVjdGlvbigpO1xuICAgIHRoaXMuc291cmNlLnNldFNvcnQoW1xuICAgICAge1xuICAgICAgICBmaWVsZDogdGhpcy5jb2x1bW4uaWQsXG4gICAgICAgIGRpcmVjdGlvbjogdGhpcy5jdXJyZW50RGlyZWN0aW9uLFxuICAgICAgICBjb21wYXJlOiB0aGlzLmNvbHVtbi5nZXRDb21wYXJlRnVuY3Rpb24oKSxcbiAgICAgIH0sXG4gICAgXSk7XG4gICAgdGhpcy5zb3J0LmVtaXQobnVsbCk7XG4gIH1cblxuICBjaGFuZ2VTb3J0RGlyZWN0aW9uKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuY3VycmVudERpcmVjdGlvbikge1xuICAgICAgY29uc3QgbmV3RGlyZWN0aW9uID0gdGhpcy5jdXJyZW50RGlyZWN0aW9uID09PSAnYXNjJyA/ICdkZXNjJyA6ICdhc2MnO1xuICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gbmV3RGlyZWN0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSB0aGlzLmNvbHVtbi5zb3J0RGlyZWN0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jdXJyZW50RGlyZWN0aW9uO1xuICB9XG59XG4iXX0=