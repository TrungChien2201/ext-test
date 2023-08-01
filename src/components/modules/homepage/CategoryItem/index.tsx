import { ICategory } from "@/utils/interface/home";
import { Col } from 'antd';

interface IProps {
    item: ICategory
}

const CategoryItem = (props: IProps) => {
    const {item} = props;
    return (
     <Col span={3} className="homepage-categories-item">
        <img src={item.thumbnail} />
        <span>{item.text}</span>
     </Col>
    )
}

export default CategoryItem;