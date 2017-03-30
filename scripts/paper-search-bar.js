class PaperSearchBar extends Polymer.mixinBehaviors(Polymer.IronControlState, Polymer.mixinBehaviors(Polymer.IronButtonState, Polymer.Element)) {

  static get is() {
    return "paper-search-bar"
  }

  static get properties() {
    return {
      /**
       * Text for which the user is searching
       */
      query: {
        type: String,
        notify: true,
        value: ''
      },
      /**
       * Text shown in the search box if the user didn't enter any query
       */
      placeholder: {
        type: String,
        value: 'Search'
      }
    }
  }

  get behaviors() {
    return []
  }

  _clear() {
    this.query = ''
  }
}
customElements.define(PaperSearchBar.is, PaperSearchBar)
