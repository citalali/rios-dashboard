import React from 'react';

function Google() {
    return(
        <div>
          <form action="https://www.google.com/search" class="searchform" method="get" name="searchform" target="_blank">
                <input name="sitesearch" type="hidden" value="" />
                <input autocomplete="on" class="form-control search" name="q" placeholder="Search on Google" required="required"  type="text" />
                <button class="button" type="submit">Search</button>
            </form>
       </div>
    );
}

export default Google