; (function () {

  class MyPageDom {
    constructor() {
      this.data = {};
      this.regElementRefs();
      this.regEventHandlers();
      this.initReadyState();
    }

    regElementRefs() {
      this.ajaxContainer = document.querySelector('.ajax-container');
      this.inputServerUrl = document.querySelector('#npt-server-url');
      this.buttonFetchJSON = document.querySelector('#btn-fetch-json');

      this.searchContainer = document.querySelector('.search-container');
      this.inputNodeId = document.querySelector('#npt-node-id');
      this.buttonFindNode = document.querySelector('#btn-find-node');

      this.searchResultContainer = document.querySelector('.search-result');
      this.jsonDataViewer = document.querySelector('.json-data-viewer > pre');
    }

    regEventHandlers() {
      this.buttonFetchJSON.addEventListener('click', (_event) => {
        this.inputServerUrl.value && this.fetchDataWithAjax(this.inputServerUrl.value);
      });

      this.buttonFindNode.addEventListener('click', (_event) => {
        this.inputNodeId.value && this.searchNodeById(this.inputNodeId.value);
      });
    }

    initReadyState() {
      if (Object.keys(this.data).length) {
        this.searchContainer.style.display = 'block';
        this.jsonDataViewer.innerHTML = JSON.stringify(this.data, null, 4);
      } else {
        this.searchContainer.style.display = 'none';
        this.jsonDataViewer.innerHTML = '';
      }
    }

    // Here is the code of Question 2 specifically
    fetchDataWithAjax(_url) {
      fetch(_url).then((_res) => {
        var contentType = _res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          return _res.json();
        }
        throw new TypeError("Oops, we haven't got JSON!");
      }).then((jsonResp) => {
        this.data = jsonResp;
        this.initReadyState();
      }).catch((_err) => {
        console.log("Some error occured", _err);
      });
    }

    // Here is the code of Question 3 specifically
    searchNodeById(_id) {
      let found = this._recursiveSearch(this.data, _id);
      if (found) {
        this.searchResultContainer.innerHTML = `Node with ID: <b>${_id}</b> have Label: <b>${found.label}</b>`;
        return found.label;
      } else {
        this.searchResultContainer.innerHTML = '<span style="color:red">No Result Found!</span>';
        return '';
      }
    }

    _recursiveSearch(_tree, _id) {
      let id = +_id;
      let tree = Array.isArray(_tree) ? _tree : [_tree];

      for (let i = 0, l = tree.length; i < l; i++) {
        if (tree[i]['id'] === id) {
          return tree[i];
        } else if (tree[i]['children'] && tree[i]['children'].length) {
          let found = this._recursiveSearch(tree[i]['children'], id);
          if (found) {
            return found;
          }
        }
      }
    }
  }

  new MyPageDom();
})();