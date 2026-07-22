import React, { useEffect } from 'react';
import Layout from '../components/Layout';


export default function ProductCategoryBaffleBags() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main">
	<div class="productListWrapper">
	

	<div class="page-content">
		<div class="productContent">	
			
			 				<div class="page-header">
					<h1 class="entry-title">Product Category: <span>Baffle Bags</span></h1>				</div>
						
			<div class="productTypes">
				<ul>
					<li><a href="/fibc/types">Types</a></li>
					<li><a href="/fibc/discharge">Discharge</a></li>
					<li><a href="/fibc/filling">Filling</a></li>
					<li><a href="/fibc/lift-loops">Lift Loops</a></li>
					<li><a href="/fibc/liners">Liners</a></li>
					<li><a href="/fibc/stitch-types">Stitch Types</a></li>
				</ul>
			</div>
			<div class="productCategories">
				
				<ul><li><a class="subcat-item all-tab " href="/fibc">All</a></li><li><a class="subcat-item active" href="/">Baffle Bags</a></li><li><a class="subcat-item " href="/conductive-bag">Conductive Bag</a></li><li><a class="subcat-item " href="/diaper-bag">Diaper Bag</a></li><li><a class="subcat-item " href="/un-bag">UN Bag</a></li></ul>			</div>
			

		
		
        <div class="productListing">
           
    
            <div class="productList">
                    </div>
        </div>
        </div>
	</div>

		</div>
</main>` }} />
        </Layout>
    );
}