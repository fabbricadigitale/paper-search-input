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
      },

      collapseView: {
        type: Boolean,
        value: false
      },

      fullbleed: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        observer: "_whenFullbleedChanged"
      },

      wide: {
        type: Boolean,
        value: false,
        observer: "_whenWideChanged"
      },

      _showInput: {
        type: Boolean,
        value: false,
        computed: "_computeShowInput(wide, fullbleed)"
      },

      _showSearch: {
        type: Boolean,
        value: true
      }

    }
  }

  get behaviors() {
    return []
  }

  _clear() {
    this.query = ''
  }

  _activeSearch(evt) {
    if(this.wide) {
      console.log("Wide view")
    }
    if(!this.wide) {
      console.log("Collapse view")
      this.fullbleed = true;
    }
  }

  _deactiveSearch(evt) {
    if(!this.wide) {
      this.fullbleed = false;
    }
  }

  _computeShowInput(wide, fullbleed) {
    if(wide) return true
    if(!wide && !fullbleed ) return false
    if(!wide && fullbleed) return true
    return false
  }

  _whenFullbleedChanged(fullbleed) {
    this._showSearch = !fullbleed
  }

  _whenWideChanged(wide) {
    if(wide) this.fullbleed = false
  }

}
customElements.define(PaperSearchBar.is, PaperSearchBar)