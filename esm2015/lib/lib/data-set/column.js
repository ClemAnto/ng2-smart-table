export class Column {
    constructor(id, settings, dataSet) {
        this.id = id;
        this.settings = settings;
        this.dataSet = dataSet;
        this.title = '';
        this.type = '';
        this.class = '';
        this.width = '';
        this.hide = false;
        this.isSortable = false;
        this.isEditable = true;
        this.isAddable = true;
        this.isFilterable = false;
        this.sortDirection = '';
        this.defaultSortDirection = '';
        this.editor = { type: '', config: {}, component: null };
        this.filter = { type: '', config: {}, component: null };
        this.renderComponent = null;
        this.process();
    }
    getOnComponentInitFunction() {
        return this.onComponentInitFunction;
    }
    getCompareFunction() {
        return this.compareFunction;
    }
    getValuePrepareFunction() {
        return this.valuePrepareFunction;
    }
    getFilterFunction() {
        return this.filterFunction;
    }
    getConfig() {
        return this.editor && this.editor.config;
    }
    getFilterType() {
        return this.filter && this.filter.type;
    }
    getFilterConfig() {
        return this.filter && this.filter.config;
    }
    process() {
        this.title = this.settings['title'];
        this.class = this.settings['class'];
        this.width = this.settings['width'];
        this.hide = !!this.settings['hide'];
        this.type = this.prepareType();
        this.editor = this.settings['editor'];
        this.filter = this.settings['filter'];
        this.renderComponent = this.settings['renderComponent'];
        this.isFilterable = typeof this.settings['filter'] === 'undefined' ? true : !!this.settings['filter'];
        this.defaultSortDirection = ['asc', 'desc']
            .indexOf(this.settings['sortDirection']) !== -1 ? this.settings['sortDirection'] : '';
        this.isSortable = typeof this.settings['sort'] === 'undefined' ? true : !!this.settings['sort'];
        this.isEditable = typeof this.settings['editable'] === 'undefined' ? true : !!this.settings['editable'];
        this.isAddable = typeof this.settings['addable'] === 'undefined' ? true : !!this.settings['addable'];
        this.sortDirection = this.prepareSortDirection();
        this.compareFunction = this.settings['compareFunction'];
        this.valuePrepareFunction = this.settings['valuePrepareFunction'];
        this.filterFunction = this.settings['filterFunction'];
        this.onComponentInitFunction = this.settings['onComponentInitFunction'];
    }
    prepareType() {
        return this.settings['type'] || this.determineType();
    }
    prepareSortDirection() {
        return this.settings['sort'] === 'desc' ? 'desc' : 'asc';
    }
    determineType() {
        // TODO: determine type by data
        return 'text';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2plY3RzL05nMlNtYXJ0VGFibGVQbHVzL25nMi1zbWFydC10YWJsZS1tYXN0ZXIvcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9saWIvZGF0YS1zZXQvY29sdW1uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyxNQUFNO0lBcUJqQixZQUFtQixFQUFVLEVBQVksUUFBYSxFQUFZLE9BQWdCO1FBQS9ELE9BQUUsR0FBRixFQUFFLENBQVE7UUFBWSxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQVksWUFBTyxHQUFQLE9BQU8sQ0FBUztRQW5CbEYsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixTQUFJLEdBQVksS0FBSyxDQUFDO1FBQ3RCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixjQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLHlCQUFvQixHQUFXLEVBQUUsQ0FBQztRQUNsQyxXQUFNLEdBQWtELEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNsRyxXQUFNLEdBQWtELEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNsRyxvQkFBZSxHQUFRLElBQUksQ0FBQztRQU8xQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELDBCQUEwQjtRQUN4QixPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztJQUN0QyxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBRUQsdUJBQXVCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ25DLENBQUM7SUFFRCxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDM0MsQ0FBQztJQUVELGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDekMsQ0FBQztJQUVELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDM0MsQ0FBQztJQUVTLE9BQU87UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFeEQsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7YUFDeEMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3hGLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEcsSUFBSSxDQUFDLFNBQVMsR0FBQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25HLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFFakQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzNELENBQUM7SUFFRCxhQUFhO1FBQ1gsK0JBQStCO1FBQy9CLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTZXQgfSBmcm9tICcuL2RhdGEtc2V0JztcblxuZXhwb3J0IGNsYXNzIENvbHVtbiB7XG5cbiAgdGl0bGU6IHN0cmluZyA9ICcnO1xuICB0eXBlOiBzdHJpbmcgPSAnJztcbiAgY2xhc3M6IHN0cmluZyA9ICcnO1xuICB3aWR0aDogc3RyaW5nID0gJyc7XG4gIGhpZGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNTb3J0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBpc0VkaXRhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgaXNBZGRhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgaXNGaWx0ZXJhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIHNvcnREaXJlY3Rpb246IHN0cmluZyA9ICcnO1xuICBkZWZhdWx0U29ydERpcmVjdGlvbjogc3RyaW5nID0gJyc7XG4gIGVkaXRvcjogeyB0eXBlOiBzdHJpbmcsIGNvbmZpZzogYW55LCBjb21wb25lbnQ6IGFueSB9ID0geyB0eXBlOiAnJywgY29uZmlnOiB7fSwgY29tcG9uZW50OiBudWxsIH07XG4gIGZpbHRlcjogeyB0eXBlOiBzdHJpbmcsIGNvbmZpZzogYW55LCBjb21wb25lbnQ6IGFueSB9ID0geyB0eXBlOiAnJywgY29uZmlnOiB7fSwgY29tcG9uZW50OiBudWxsIH07XG4gIHJlbmRlckNvbXBvbmVudDogYW55ID0gbnVsbDtcbiAgY29tcGFyZUZ1bmN0aW9uOiBGdW5jdGlvbjtcbiAgdmFsdWVQcmVwYXJlRnVuY3Rpb246IEZ1bmN0aW9uO1xuICBmaWx0ZXJGdW5jdGlvbjogRnVuY3Rpb247XG4gIG9uQ29tcG9uZW50SW5pdEZ1bmN0aW9uOiBGdW5jdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaWQ6IHN0cmluZywgcHJvdGVjdGVkIHNldHRpbmdzOiBhbnksIHByb3RlY3RlZCBkYXRhU2V0OiBEYXRhU2V0KSB7XG4gICAgdGhpcy5wcm9jZXNzKCk7XG4gIH1cblxuICBnZXRPbkNvbXBvbmVudEluaXRGdW5jdGlvbigpOiBGdW5jdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMub25Db21wb25lbnRJbml0RnVuY3Rpb247XG4gIH1cblxuICBnZXRDb21wYXJlRnVuY3Rpb24oKTogRnVuY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmVGdW5jdGlvbjtcbiAgfVxuXG4gIGdldFZhbHVlUHJlcGFyZUZ1bmN0aW9uKCk6IEZ1bmN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVByZXBhcmVGdW5jdGlvbjtcbiAgfVxuXG4gIGdldEZpbHRlckZ1bmN0aW9uKCk6IEZ1bmN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJGdW5jdGlvbjtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmVkaXRvciAmJiB0aGlzLmVkaXRvci5jb25maWc7XG4gIH1cblxuICBnZXRGaWx0ZXJUeXBlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyICYmIHRoaXMuZmlsdGVyLnR5cGU7XG4gIH1cblxuICBnZXRGaWx0ZXJDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXIgJiYgdGhpcy5maWx0ZXIuY29uZmlnO1xuICB9XG5cbiAgcHJvdGVjdGVkIHByb2Nlc3MoKSB7XG4gICAgdGhpcy50aXRsZSA9IHRoaXMuc2V0dGluZ3NbJ3RpdGxlJ107XG4gICAgdGhpcy5jbGFzcyA9IHRoaXMuc2V0dGluZ3NbJ2NsYXNzJ107XG4gICAgdGhpcy53aWR0aCA9IHRoaXMuc2V0dGluZ3NbJ3dpZHRoJ107XG4gICAgdGhpcy5oaWRlID0gISF0aGlzLnNldHRpbmdzWydoaWRlJ107XG4gICAgdGhpcy50eXBlID0gdGhpcy5wcmVwYXJlVHlwZSgpO1xuICAgIHRoaXMuZWRpdG9yID0gdGhpcy5zZXR0aW5nc1snZWRpdG9yJ107XG4gICAgdGhpcy5maWx0ZXIgPSB0aGlzLnNldHRpbmdzWydmaWx0ZXInXTtcbiAgICB0aGlzLnJlbmRlckNvbXBvbmVudCA9IHRoaXMuc2V0dGluZ3NbJ3JlbmRlckNvbXBvbmVudCddO1xuXG4gICAgdGhpcy5pc0ZpbHRlcmFibGUgPSB0eXBlb2YgdGhpcy5zZXR0aW5nc1snZmlsdGVyJ10gPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6ICEhdGhpcy5zZXR0aW5nc1snZmlsdGVyJ107XG4gICAgdGhpcy5kZWZhdWx0U29ydERpcmVjdGlvbiA9IFsnYXNjJywgJ2Rlc2MnXVxuICAgICAgLmluZGV4T2YodGhpcy5zZXR0aW5nc1snc29ydERpcmVjdGlvbiddKSAhPT0gLTEgPyB0aGlzLnNldHRpbmdzWydzb3J0RGlyZWN0aW9uJ10gOiAnJztcbiAgICB0aGlzLmlzU29ydGFibGUgPSB0eXBlb2YgdGhpcy5zZXR0aW5nc1snc29ydCddID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiAhIXRoaXMuc2V0dGluZ3NbJ3NvcnQnXTtcbiAgICB0aGlzLmlzRWRpdGFibGUgPSB0eXBlb2YgdGhpcy5zZXR0aW5nc1snZWRpdGFibGUnXSA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogISF0aGlzLnNldHRpbmdzWydlZGl0YWJsZSddO1xuICAgIHRoaXMuaXNBZGRhYmxlPXR5cGVvZiB0aGlzLnNldHRpbmdzWydhZGRhYmxlJ10gPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6ICEhdGhpcy5zZXR0aW5nc1snYWRkYWJsZSddO1xuICAgIHRoaXMuc29ydERpcmVjdGlvbiA9IHRoaXMucHJlcGFyZVNvcnREaXJlY3Rpb24oKTtcblxuICAgIHRoaXMuY29tcGFyZUZ1bmN0aW9uID0gdGhpcy5zZXR0aW5nc1snY29tcGFyZUZ1bmN0aW9uJ107XG4gICAgdGhpcy52YWx1ZVByZXBhcmVGdW5jdGlvbiA9IHRoaXMuc2V0dGluZ3NbJ3ZhbHVlUHJlcGFyZUZ1bmN0aW9uJ107XG4gICAgdGhpcy5maWx0ZXJGdW5jdGlvbiA9IHRoaXMuc2V0dGluZ3NbJ2ZpbHRlckZ1bmN0aW9uJ107XG4gICAgdGhpcy5vbkNvbXBvbmVudEluaXRGdW5jdGlvbiA9IHRoaXMuc2V0dGluZ3NbJ29uQ29tcG9uZW50SW5pdEZ1bmN0aW9uJ107XG4gIH1cblxuICBwcmVwYXJlVHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzWyd0eXBlJ10gfHwgdGhpcy5kZXRlcm1pbmVUeXBlKCk7XG4gIH1cblxuICBwcmVwYXJlU29ydERpcmVjdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzWydzb3J0J10gPT09ICdkZXNjJyA/ICdkZXNjJyA6ICdhc2MnO1xuICB9XG5cbiAgZGV0ZXJtaW5lVHlwZSgpOiBzdHJpbmcge1xuICAgIC8vIFRPRE86IGRldGVybWluZSB0eXBlIGJ5IGRhdGFcbiAgICByZXR1cm4gJ3RleHQnO1xuICB9XG59XG4iXX0=