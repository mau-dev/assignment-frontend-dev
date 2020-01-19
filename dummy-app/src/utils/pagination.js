export function paginator(currentPage, totalPages) {
    let pages = [];
    // your code here, have fun!

    //tests
    //"when page 1 is active, it just renders up to four more pages"
    //"when we are near the left edge of the range, pages start from 1"
    //"in most cases, we see two pages before and after the current page"
    //"when we are near the right edge of the range, pages end at the last page"

    //default case
    //start = currentPage -2; end = currentPage + 2(start+4) ;
    // case, current page is <=3 render 12345
    // case, when currentPage = 1
    //always start with 1 and render up to 5 pages, or less if totalPages less then 5
    //if  totalPages < 5
    //end = totalPages
    // case current page is totalPages or totalPages-1,  means currentPage > totalPages-2
    //start = totalPages - 4; end = totalPage
    //iterate from start to end
    let start;
    let end;

       if (currentPage <= 3) {
            start = 1;
        } else if (currentPage > totalPages - 2) {
            start = totalPages - 4;
        } else {
            start = currentPage - 2;
        }
            end = start + 4;

            for (let i = start; i <= end; i++) {
                pages.push(i)
                if (totalPages < 5) {
                    end = totalPages
                }
            }

    return pages;

}