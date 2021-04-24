import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Row } from '../../../lib/data-set/row';
import { Grid } from '../../../lib/grid';
export class TbodyCustomComponent {
    constructor() {
        this.custom = new EventEmitter();
    }
    onCustom(action, event) {
        event.preventDefault();
        event.stopPropagation();
        this.custom.emit({
            action: action.name,
            data: this.row.getData(),
            source: this.source
        });
    }
}
TbodyCustomComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng2-st-tbody-custom',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
      <a *ngFor="let action of grid.getSetting('actions.custom')" href="#"
         class="ng2-smart-action ng2-smart-action-custom-custom" 
         [title]="action.tooltip"
         [innerHTML]="action.title"
         (click)="onCustom(action, $event)"></a>
        `
            },] }
];
TbodyCustomComponent.propDecorators = {
    grid: [{ type: Input }],
    row: [{ type: Input }],
    source: [{ type: Input }],
    custom: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9qZWN0cy9OZzJTbWFydFRhYmxlUGx1cy9uZzItc21hcnQtdGFibGUtY2xlbWFudG8vcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Rib2R5L2NlbGxzL2N1c3RvbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFaEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBYXpDLE1BQU0sT0FBTyxvQkFBb0I7SUFYakM7UUFnQmMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFhL0MsQ0FBQztJQVhHLFFBQVEsQ0FBQyxNQUFXLEVBQUUsS0FBVTtRQUM1QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtZQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDdEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7O1lBM0JKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7Ozs7U0FNTDthQUNSOzs7bUJBR0ksS0FBSztrQkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L3Jvdyc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi8uLi9saWIvZ3JpZCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmcyLXN0LXRib2R5LWN1c3RvbScsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxhICpuZ0Zvcj1cImxldCBhY3Rpb24gb2YgZ3JpZC5nZXRTZXR0aW5nKCdhY3Rpb25zLmN1c3RvbScpXCIgaHJlZj1cIiNcIlxuICAgICAgICAgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9uIG5nMi1zbWFydC1hY3Rpb24tY3VzdG9tLWN1c3RvbVwiIFxuICAgICAgICAgW3RpdGxlXT1cImFjdGlvbi50b29sdGlwXCJcbiAgICAgICAgIFtpbm5lckhUTUxdPVwiYWN0aW9uLnRpdGxlXCJcbiAgICAgICAgIChjbGljayk9XCJvbkN1c3RvbShhY3Rpb24sICRldmVudClcIj48L2E+XG4gICAgICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgVGJvZHlDdXN0b21Db21wb25lbnQge1xuXG4gICAgQElucHV0KCkgZ3JpZDogR3JpZDtcbiAgICBASW5wdXQoKSByb3c6IFJvdztcbiAgICBASW5wdXQoKSBzb3VyY2U6IGFueTtcbiAgICBAT3V0cHV0KCkgY3VzdG9tID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBvbkN1c3RvbShhY3Rpb246IGFueSwgZXZlbnQ6IGFueSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0aGlzLmN1c3RvbS5lbWl0KHtcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLm5hbWUsXG4gICAgICAgICAgICBkYXRhOiB0aGlzLnJvdy5nZXREYXRhKCksXG4gICAgICAgICAgICBzb3VyY2U6IHRoaXMuc291cmNlXG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19