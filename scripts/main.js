/*global jQuery, d3, dagreD3, DAG */

(function () {
    'use strict';
    window.DAG = {
        displayGraph: function (graph, dagNameElem, svgElem) {
            dagNameElem.text(graph.name);
            this.renderGraph(graph, svgElem);
        },

        renderGraph: function(graph, svgParent) {
            var nodes = graph.nodes;
            var links = graph.links;

            var graphElem = svgParent.children('g').get(0);
            var svg = d3.select(graphElem);
            var renderer = new dagreD3.Renderer();
            
            var defaultDrawNodes = renderer._drawNode;
            renderer._drawNode = function(graph, u, root) {
              defaultDrawNodes(graph, u, root);
              var milestone = graph.node(u).milestone;
              var status = graph.node(u).status;
              var owner = graph.node(u).owner;

              if (milestone) {
                root.attr("class", "milestone");
              }
              if (status == "complete") {
                root.attr("class", "complete");
              }
              if (owner) {
                root
                  .append("text")
                  .attr("text-anchor", "left")
                  .attr("class", "owned")
                  .append("tspan")
                    .attr("dy", "1em")
                    .text(function() { return "(" + owner + ")"; });
              }
            };

            var layout = dagreD3.layout().rankDir('LR').nodeSep(20);
            renderer.layout(layout).run(dagreD3.json.decode(nodes, links), svg.append('g'));

            // Adjust SVG height to content
            var main = svgParent.find('g > g');
            var h = main.get(0).getBoundingClientRect().height;
            var newHeight = h + 40;
            newHeight = newHeight < 80 ? 80 : newHeight;
            svgParent.height(newHeight);

            // Zoom
            d3.select(svgParent.get(0)).call(d3.behavior.zoom().on('zoom', function() {
                var ev = d3.event;
                svg.select('g')
                    .attr('transform', 'translate(' + ev.translate + ') scale(' + ev.scale + ')');
            }));
        }
    };
})();

(function () {
    'use strict';

    // load data on dom ready
    jQuery(function () {
        // load script with graph data
        var fileName = 'graph-oop-iframes.js';
        var dataScript = document.createElement('script');
        dataScript.src = fileName;
        document.body.appendChild(dataScript);
    });

    // callback for graph data loading
    window.loadData = function (data) {
        DAG.displayGraph(data, jQuery('#dag-name'), jQuery('#dag > svg'));
    };
}());



