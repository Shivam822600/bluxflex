import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_rPET_Fabrics_jpg_1 from '../assets/images/rPET-Fabrics.jpg?url';
import asset_rPET_Fabrics_297x300_jpg_2 from '../assets/images/rPET-Fabrics-297x300.jpg?url';

export default function ProductRpetFabrics() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-1716 product type-product status-publish has-post-thumbnail hentry product_category-specialty-febrics">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_rPET_Fabrics_jpg_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_rPET_Fabrics_jpg_1} 945w, ${asset_rPET_Fabrics_297x300_jpg_2} 297w, ${asset_rPET_Fabrics_jpg_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">rPET Fabrics</h1>                </div>
    	                <div class="page-content">
        <p><strong>rPET Fabrics</strong></p>
<p>Our rPET Fabrics are textiles made from recycled polyethylene terephthalate, primarily sourced from post-consumer plastic bottles and industrial plastic waste. rPET offers strength, durability, and performance comparable to virgin polyester, with a lower environmental footprint.</p>
<p>rPET fabric production typically uses less energy and water than conventional polyester, and uses recycled plastic material as its feedstock. It is used by brands, manufacturers, and governments working toward sustainability and plastic reduction goals.</p>
<p>Our rPET Fabrics are available in woven and knitted formats, can be laminated, coated, printed, or blended with other fibers. Used across fashion, sportswear, industrial textiles, and geotextiles.</p>
<p><strong>Ideal For:</strong> Eco-friendly bags and packaging, sportswear and activewear, outdoor gear, home textiles, upholstery, automotive interiors, industrial non-wovens, and sustainable retail branding.</p>
<p><strong>Key Features:</strong></p>
<p>Made from 100% post-consumer recycled plastic bottles and waste. Matches virgin polyester in strength, durability, and performance, with lower energy and water use in production compared to virgin polyester. Water-resistant, wrinkle-resistant, quick-drying, and colorfast. Available in woven, knitted, laminated, and coated formats. Certifiable under GRS (Global Recycled Standard) and OEKO-TEX. Suitable for brands targeting sustainability and eco-compliance markets</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}