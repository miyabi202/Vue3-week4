export default {
  //在Vue.js中，通常會將組件定義為一個JavaScript對象，並導出為默認對象。因此，大多數Vue.js組件文件使用export default來導出組件定義，以便在其他文件中使用import語句導入。這是一種通用的Vue.js組件導出方式。
  //delModal 是一個 Vue 組件，用於在刪除產品時顯示一個確認刪除的對話框。這個對話框包含了一個標題、一條消息，以及兩個按鈕，分別用於取消和確認刪除操作。用戶在刪除產品時會觸發這個對話框的顯示，以確保他們確認刪除操作。
  props: ['tempProduct','delProduct','getData'],
  //props是Vue.js中用於從父組件向子組件傳遞數據的一種機制。通過props，父組件可以將數據傳遞給子組件，子組件可以接收這些數據並在其內部使用。
  data() {
    return {
      modalDel: null,
    }
  },
  methods: {
    openModal() {
      this.modalDel.show();
    },
    closeModal() {
      this.modalDel.hide();
    }
  },

//https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_modal&stacked=h
  //ref="delProductModal"：這是Vue.js中的ref屬性，用於在組件中引用DOM元素，方便後續的操作和訪問。
  //在 Vue.js 中，可以使用 <template> 標籤來定義模板，但也可以直接在組件的選項中定義模板，就像這樣：
  template: `<div id="delProductModal" ref="delProductModal" class="modal fade" tabindex="-1"
    aria-labelledby="delProductModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="delProduct">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>`,
  mounted(){
    this.modalDel = new bootstrap.Modal(this.$refs.delProductModal, {
      keyboard: false,
      backdrop: 'static'
    });
  },                                
}

//keyboard: false：當設置為 false 時，表示禁用鍵盤與模態框的交互作用。這意味著用戶無法使用鍵盤按鍵（例如 Enter 鍵或 Esc 鍵）來關閉模態框或進行其他操作。
//ackdrop: 'static'：當設置為 'static' 時，表示點擊模態框外部區域時不會關閉模態框。通常情況下，點擊模態框外部會導致模態框關閉，但設置為 'static' 後，這個行為將被禁用，模態框的背景保持靜態不變。
/**export default {
  template: `
    <div>
      <!-- 在這裡放置您的模板內容 -->
    </div>
  `,
  // 其他選項...
}**/