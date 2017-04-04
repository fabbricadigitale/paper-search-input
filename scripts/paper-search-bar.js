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
      /**
       * Enabled when you are searching in not wide view
       */
      fullbleed: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        observer: "_whenFullbleedChanged"
      },
      /**
       * Desktop view mode
       */
      wide: {
        type: Boolean,
        value: false,
        observer: "_whenWideChanged",
        reflectToAttribute: true
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
    this.query = undefined
  }

  _activeSearch(evt) {
    if(this.wide) {
    }
    if(!this.wide) {
      this.fullbleed = true;
    }
  }

  _deactiveSearch(evt) {
    if(!this.wide) {
      this.fullbleed = false
      this.query = undefined
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
    if(!wide && this.query) this.fullbleed = true
    if(wide) this.fullbleed = false
  }

}
customElements.define(PaperSearchBar.is, PaperSearchBar)
