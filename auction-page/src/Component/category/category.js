import './scss/category.css'
import AllCatMenuItems from './categoryData'

export default function Category(){
    return(
        <div className='cate_contain'>
            <div className='cate_header'>
            Choose from all categories available
            </div>
            <div className='cate_cate'>
            {AllCatMenuItems.map((items)=>{
                return(
                    <p><a href='/'>{items.cate}</a></p>
                )
            })}
            </div>
        </div>
    )
}