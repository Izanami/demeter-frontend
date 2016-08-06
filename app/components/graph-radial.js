import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement() {
        this._super(...arguments);

        /* Get pass arguments */
        let name = this.get('name');
        let text = this.get('value');
        let unit = this.get('unit');

        /* Defaults variables */
        if(name === undefined) {
            name = "";
        }

        if(text === undefined || text === null) {
            text = "";
        }


        if(unit === undefined) {
            unit = "";
        }

        /* Calc dimensions */
        let rayon = 80;
        let line_size = 15;

        let font_size_name = rayon/3;
        let font_size_value = rayon/4;
        let center = rayon + line_size;
        let circumference = 2*3.14*rayon;

        /* Select canvas balise */
        let graph_selector  = this.$(".graph");

        /* Cut strings if too long */
        name = name.substring(0, 10);
        text = text.toString().substring(0, 10) + " " + unit;

        /* Append svg canvas */
        let canvas = d3.selectAll(graph_selector.toArray()).append('svg')
            .attr("role", "img")
            .attr("viewBox", "0 0 "+ center*2 + " " + center*2)
            .attr("width", center*2)
            .attr("height", center*2);

        /* Draw circle */
        let circle = canvas.selectAll("circle")
            .data([25])
            .enter()
            .append("circle");

        circle
            .attr("transform", function() {
                return "rotate(180, " + center + ", " + center + ")";
            })
            .attr("cx", center)
            .attr("cy", center)
            .attr("r", rayon)
            .attr("stroke", "#CCEBC0")
            .attr("stroke-width", line_size)
            .attr("stroke-dasharray", function() {
                return "350" + "," + circumference;
            })
            .style("fill", "none");

        /* Draw text : value and unit */
        canvas.append("text")
            .attr("text-anchor", "middle")
            .attr("font-size", font_size_name)
            .attr("x", center)
            .attr("y", center)
            .attr("alignment-baseline", "central")
            .text(name);


        canvas.append("text")
            .attr("text-anchor", "middle")
            .attr("font-size", font_size_value)
            .attr("x", center)
            .attr("y", center + (rayon/3))
            .attr("alignment-baseline", "central")
            .text(text);

    }
});
