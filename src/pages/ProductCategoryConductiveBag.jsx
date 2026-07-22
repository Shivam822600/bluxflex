import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_Un_Bags_jpg_1 from '../assets/images/Un-Bags-297x300.jpg?url';

export default function ProductCategoryConductiveBag() {
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
					<h1 class="entry-title">Product Category: <span>Conductive Bag</span></h1>				</div>
						
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
				
				<ul><li><a class="subcat-item all-tab " href="/fibc">All</a></li><li><a class="subcat-item " href="/baffle-bags">Baffle Bags</a></li><li><a class="subcat-item active" href="/">Conductive Bag</a></li><li><a class="subcat-item " href="/diaper-bag">Diaper Bag</a></li><li><a class="subcat-item " href="/un-bag">UN Bag</a></li></ul>			</div>
			

		
		
        <div class="productListing">
           
    
            <div class="productList">
            			<article class="post">
				<div class="entry-thumbnail"><a href="/product/un-bags"><img fetchpriority="high" width="800" height="808" src="${asset_Un_Bags_jpg_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_Un_Bags_jpg_1} 945w, ${asset_Un_Bags_jpg_1} 297w, ${asset_Un_Bags_jpg_1} 768w" sizes="(max-width: 800px) 100vw, 800px"></a></div>
				<div class="entry-content-wrapper">
					<h2 class="entry-title"><a href="/product/un-bags">Conductive Bag</a></h2><p>Our Conductive Bags are designed to eliminate the risks associated with static electricity during storage and transportation. Made from specialized conductive materials, these bags safely dissipate electrostatic charges, making them ideal for flammable or sensitive materials. Widely used in chemical and industrial applications, our conductive bags ensure maximum safety, compliance, and peace of mind in… <a class="read-more-inline" href="/product/un-bags">Read More</a></p>
					
				</div>

			</article>

		        </div>
        </div>
        </div>
	</div>

		</div>
</main>` }} />
        </Layout>
    );
}