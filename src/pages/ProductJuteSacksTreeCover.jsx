import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_jute_sacks_treecover_png_1 from '../assets/images/jute_sacks_treecover.png?url';

export default function ProductJuteSacksTreeCover() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-1297 product type-product status-publish has-post-thumbnail hentry product_category-jute-burlap">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_jute_sacks_treecover_png_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_jute_sacks_treecover_png_1} 945w, ${asset_jute_sacks_treecover_png_1} 297w, ${asset_jute_sacks_treecover_png_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Jute Sacks Tree Cover</h1>                </div>
    	                <div class="page-content">
        
        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}