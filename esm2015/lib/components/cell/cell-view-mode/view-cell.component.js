import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
export class ViewCellComponent {
}
ViewCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'table-cell-view-mode',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div  [ngSwitch]="cell.getColumn().type" class="cell-view" 
          [ngClass]="[cell.getColumn().class, 'cell-'+cell.getColumn().id]">
        <custom-view-component *ngSwitchCase="'custom'" [cell]="cell"></custom-view-component>
        <div *ngSwitchCase="'html'" [innerHTML]="cell.getValue()"></div>
        <div *ngSwitchDefault>{{ cell.getValue() }}</div>
    </div>
    `
            },] }
];
ViewCellComponent.propDecorators = {
    cell: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9qZWN0cy9OZzJTbWFydFRhYmxlUGx1cy9uZzItc21hcnQtdGFibGUtbWFzdGVyL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwtdmlldy1tb2RlL3ZpZXctY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBY2xELE1BQU0sT0FBTyxpQkFBaUI7OztZQVo3QixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7OztLQU9QO2FBQ0o7OzttQkFHRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NlbGwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1jZWxsLXZpZXctbW9kZScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgIFtuZ1N3aXRjaF09XCJjZWxsLmdldENvbHVtbigpLnR5cGVcIiBjbGFzcz1cImNlbGwtdmlld1wiIFxuICAgICAgICAgIFtuZ0NsYXNzXT1cIltjZWxsLmdldENvbHVtbigpLmNsYXNzLCAnY2VsbC0nK2NlbGwuZ2V0Q29sdW1uKCkuaWRdXCI+XG4gICAgICAgIDxjdXN0b20tdmlldy1jb21wb25lbnQgKm5nU3dpdGNoQ2FzZT1cIidjdXN0b20nXCIgW2NlbGxdPVwiY2VsbFwiPjwvY3VzdG9tLXZpZXctY29tcG9uZW50PlxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInaHRtbCdcIiBbaW5uZXJIVE1MXT1cImNlbGwuZ2V0VmFsdWUoKVwiPjwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaERlZmF1bHQ+e3sgY2VsbC5nZXRWYWx1ZSgpIH19PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVmlld0NlbGxDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGNlbGw6IENlbGw7XG5cbiBcbn1cbiJdfQ==