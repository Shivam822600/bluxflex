import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_Monofilament_Fabrics_jpg_1 from '../assets/images/Monofilament-Fabrics.jpg?url';
import asset_Monofilament_Fabrics_297x300_jpg_2 from '../assets/images/Monofilament-Fabrics-297x300.jpg?url';

export default function ProductMonofilamentFabrics() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-1718 product type-product status-publish has-post-thumbnail hentry product_category-specialty-febrics">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_Monofilament_Fabrics_jpg_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_Monofilament_Fabrics_jpg_1} 945w, ${asset_Monofilament_Fabrics_297x300_jpg_2} 297w, ${asset_Monofilament_Fabrics_jpg_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Monofilament Fabrics</h1>                </div>
    	                <div class="page-content">
        <p><strong>Single Strand. Superior Strength.</strong></p>
<p>Our Monofilament Fabrics are technical textiles woven from a single continuous synthetic filament, giving them greater dimensional stability than standard multi-strand fabrics. This single-filament construction provides high tensile strength, a uniform structure, and good resistance to abrasion, chemicals, and deformation under pressure.</p>
<p>Monofilament fabrics resist fraying and shifting over time, making them suitable for precision applications in filtration, industrial screening, agriculture, construction, and the medical sector. The smooth surface also makes them easy to clean and maintain.</p>
<p>Available in a range of materials including polyester, polyamide, polypropylene, and HDPE — with optional coatings and finishes for added UV resistance, fire resistance, or antistatic properties. Custom mesh sizes, weights, and widths are available for bulk export orders.</p>
<p><strong>Ideal For:</strong> Industrial filtration systems, agricultural crop netting, geotextile applications, scaffold netting, medical meshes, automotive components, food industry screening, and architectural coverings.</p>
<p><strong>Key Features:</strong></p>
<p>Single-filament construction for superior strength and dimensional stability Tear-resistant, shrink-resistant, and abrasion-resistant Smooth surface for easy cleaning and maintenance Excellent chemical and UV resistance Available in polyester, polyamide, HDPE, and polypropylene Customizable mesh size, weight, and coating options Suitable for heavy-duty industrial and precision applications</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}