class SearchView{
    _searchWord = document.querySelector('.searchInput');
    // _inputForm = document.querySelector('.inputF')

    _getTheSearchWord(){
        const searchWord = document.querySelector('.searchInput');
        const query = searchWord.value;
        return query;
    }

    _clearInputBar(){
        const searchWord = document.querySelector('.searchInput');
        searchWord.value = '';
    
    }

    _searchHandler(handler){
        const inputForm = document.querySelector('.inputF');
        inputForm.addEventListener('submit',function(e){
            e.preventDefault();
            handler();
        })
    }

    _searchPageRender(data){
         const mainFrame = document.querySelector('.mainFrame')
         console.log(mainFrame + "  all goood")



        // mainFrame.insertAdjacentHTML('afterbegin',` 
        //     ${
        //         data.map((el) =>{
        //             return `
        //             <div class="innerFrame">
        //             <div class="searchPoster">
        //                 <img class="searchPoster" src="${el.poster}" alt="results poster">
        //             </div>
        //             <div class="searchInfo">
        //                 <div class="searchTitle">${el.title}</div>
        //                 <div class="searchinfo--deep">test overview</div>
        //             </div>
        //         </div>
        //         <hr>
        //             `
        //         }).join('')
        //     }
        // `)
    }


}

export default new SearchView();