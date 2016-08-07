import Ember from 'ember';

export default Ember.Component.extend({
    name: '',
    value: 0,
    unit: '',
    rayon: 80,
    lineSize: 15,

    nameFontSize: Ember.computed('rayon', function() {
        return this.get('rayon')/3;
    }),

    valueFontSize: Ember.computed('rayon', function() {
        return this.get('rayon')/4;
    }),

    circumference: Ember.computed('rayon', function() {
        return 2 * 3.14 * this.get('rayon');
    }),

    center: Ember.computed('rayon', 'lineSize', function() {
        return this.get('rayon') + this.get('lineSize');
    }),

    offset: Ember.computed('minimum', function() {
        if(this.get('minimum') !== undefined) {
            return this.get('minimum') * -1;
        } else {
            return 0;
        }
    }),

    dash: Ember.computed('value', 'maximum', 'circumference', 'offset', function() {
        if(this.get('maximum') === undefined) {
            return this.get('circumference');
        }

        let maximum_dash = this.get('maximum') + this.get('offset');
        let ratio = Math.abs(this.get('value')) / maximum_dash;

        return ratio * this.get('circumference');
    }),

    selector: Ember.computed(function() {
        return this.$(".graph");
    }),

    nameText: Ember.computed('name', function() {
        if(this.get('name') !== undefined) {
            return this.get('name').substring(0, 10);
        } else {
            return '';
        }
    }),

    valueText: Ember.computed('value', function() {
        if(this.get('value') !== undefined) {
            return this.get('value').toString().substring(0, 15);
        } else {
            return '';
        }
    }),

    unitText: Ember.computed('unit', function() {
        if(this.get('unit') !== undefined) {
            return this.get('unit').toString().substring(0, 5);
        } else {
            return '';
        }
    }),

    fullText: Ember.computed('valueText', 'unitText', function() {
        return this.get('valueText') + " " + this.get('unitText');
    }),

    canvas: Ember.computed('selector', function() {
        let center = this.get('center');
        return d3.selectAll(this.get('selector').toArray()).append('svg')
            .attr("role", "img")
            .attr("viewBox", "0 0 "+ center*2 + " " + center*2)
            .attr("width", center*2)
            .attr("height", center*2);
    }),

    circleSvg: Ember.on('didInsertElement', Ember.observer('canvas', 'center', 'lineSize', 'dash', function() {
        let self = this;
        let canvas = this.get('canvas');
        let center = this.get('center');

        if(this.get('circleDOM') !== undefined) {
            this.get('circleDOM').remove();
        }

        let circle = canvas.append("circle");
        this.set('circleDOM', circle);

        circle
            .attr("transform", function() {
                return "rotate(180, " + center + ", " + center + ")";
            })
            .attr("cx", center)
            .attr("cy", center)
            .attr("r", this.get('rayon'))
            .attr("stroke", "#CCEBC0")
            .attr("stroke-width", this.get('lineSize'))
            .attr("stroke-dasharray", function() {
                return self.get('dash') + "," + self.get('circumference');
            })
            .style("fill", "none");
    })),

    nameSvg: Ember.on('didInsertElement', Ember.observer('canvas', 'center', 'nameText', function() {
        let canvas = this.get('canvas');
        let center = this.get('center');

        if(this.get('nameDOM') !== undefined) {
            this.get('nameDOM').remove();
        }

        let name = canvas.append("text");
        this.set('nameDOM', name);

        name
            .attr('id', 'name')
            .attr("text-anchor", "middle")
            .attr("font-size", this.get('nameFontSize'))
            .attr("x", center)
            .attr("y", center)
            .attr("alignment-baseline", "central")
            .text(this.get('nameText'));

    })),

    valueSvg: Ember.on('didInsertElement', Ember.observer('canvas', 'center', 'fullText', function() {
        let canvas = this.get('canvas');
        let center = this.get('center');

        if(this.get('valueDOM') !== undefined) {
            this.get('valueDOM').remove();
        }

        let value = canvas.append("text");
        this.set('valueDOM', value);

        value
            .attr('id', 'value')
            .attr("text-anchor", "middle")
            .attr("font-size", this.get('valueFontSize'))
            .attr("x", center)
            .attr("y", center + (this.get('rayon')/3))
            .attr("alignment-baseline", "central")
            .text(this.get('fullText'));
    })),
});
