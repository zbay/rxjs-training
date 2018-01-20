<html>
    <head>
      <script src="https://npmcdn.com/rxjs@5.0.0-beta.1/bundles/Rx.umd.js"></script>
<script>
</script>
</head>
</html>
const {Rx, h} = Cycle;

function main({DOM}) {
  return {
    DOM: // TODO: Return an Observable of virtual DOM elements,
         // displaying a button and a label that shows how many
         // times the button was clicked.
  };
}

Cycle.run(main, {
  DOM: Cycle.makeDOMDriver('#app')
});
