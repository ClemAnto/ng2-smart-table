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
          [ngClass]="[cell.getColumn().class || '', 'cell-'+cell.getColumn().id]">
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9qZWN0cy9OZzJTbWFydFRhYmxlUGx1cy9uZzItc21hcnQtdGFibGUtY2xlbWFudG8vcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC12aWV3LW1vZGUvdmlldy1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFjbEQsTUFBTSxPQUFPLGlCQUFpQjs7O1lBWjdCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7Ozs7O0tBT1A7YUFDSjs7O21CQUdFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGwgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvY2VsbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLWNlbGwtdmlldy1tb2RlJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAgW25nU3dpdGNoXT1cImNlbGwuZ2V0Q29sdW1uKCkudHlwZVwiIGNsYXNzPVwiY2VsbC12aWV3XCIgXG4gICAgICAgICAgW25nQ2xhc3NdPVwiW2NlbGwuZ2V0Q29sdW1uKCkuY2xhc3MgfHwgJycsICdjZWxsLScrY2VsbC5nZXRDb2x1bW4oKS5pZF1cIj5cbiAgICAgICAgPGN1c3RvbS12aWV3LWNvbXBvbmVudCAqbmdTd2l0Y2hDYXNlPVwiJ2N1c3RvbSdcIiBbY2VsbF09XCJjZWxsXCI+PC9jdXN0b20tdmlldy1jb21wb25lbnQ+XG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidodG1sJ1wiIFtpbm5lckhUTUxdPVwiY2VsbC5nZXRWYWx1ZSgpXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgKm5nU3dpdGNoRGVmYXVsdD57eyBjZWxsLmdldFZhbHVlKCkgfX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBWaWV3Q2VsbENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgY2VsbDogQ2VsbDtcblxuIFxufVxuIl19