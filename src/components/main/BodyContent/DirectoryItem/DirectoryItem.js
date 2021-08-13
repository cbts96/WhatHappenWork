import React, { useState, useEffect } from "react";
import Data from "../../../../data/basicData.json";
import { List, Avatar, Button, Skeleton, Card } from "antd";
// import reqwest from "reqwest";

import "./DirectoryItem.scss";
import Img from "../../../../assets/images/img_01.png";
const DirectoryItem = ({ initLoading, loading, data, list }) => {
  const { Meta } = Card;
  console.log(Data);
  const [DirectState, setDirectState] = useState({
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  });
  useEffect(() => {
    try {
    } catch (err) {
      console.log(err);
    }
    setDirectState({
      initLoading: false,
      // data: res,
      // list: res,
    });
  }, []);
  const count = 3;
  const getData = (callback) => {
    const DataTransform = Data.results.filter((month, idx) => idx < 4);
    console.log(DataTransform);
    return DataTransform;
  };
  console.log(data);

  // const loadMore =
  // !initLoading && !loading ? (
  //   <div
  //     style={{
  //       textAlign: 'center',
  //       marginTop: 12,
  //       height: 32,
  //       lineHeight: '32px',
  //     }}
  //   >
  //     <Button onClick={onLoadMore}>SEE MORE</Button>
  //   </div>
  // ) : null;
  const item = () => {
    <div className="bot">
      <div className="left">2000 won</div>
      <div className="right">
        2000 <i class="far fa-heart"></i>{" "}
      </div>
    </div>;
  };
  return (
    <div className="card-container">
      <Card
      className="card"
        hoverable
         style={{ width: 240, height: 400, marginBottom:"37px" }}
        cover={<img alt="example" src={Img} />}
      >
        <Meta title="[What happen] How to create" />
        <div className="bot">
          <div className="left">2000 won</div>
          <div className="right">
            <i class="fas fa-heart"></i> 2000{" "}
          </div>
        </div>
      </Card>
      <Card
      className="card"
        hoverable
         style={{ width: 240, height: 400, marginBottom:"37px" }}
        cover={<img alt="example" src={Img} />}
      >
        <Meta title="[What happen] How to create" />
        <div className="bot">
          <div className="left">2000 won</div>
          <div className="right">
            <i class="fas fa-heart"></i> 2000{" "}
          </div>
        </div>
      </Card><Card
      className="card"
        hoverable
         style={{ width: 240, height: 400, marginBottom:"37px" }}
        cover={<img alt="example" src={Img} />}
      >
        <Meta title="[What happen] How to create" />
        <div className="bot">
          <div className="left">2000 won</div>
          <div className="right">
            <i class="fas fa-heart"></i> 2000{" "}
          </div>
        </div>
      </Card><Card
      className="card"
        hoverable
         style={{ width: 240, height: 400, marginBottom:"37px" }}
        cover={<img alt="example" src={Img} />}
      >
        <Meta title="[What happen] How to create" />
        <div className="bot">
          <div className="left">2000 won</div>
          <div className="right">
            <i class="fas fa-heart"></i> 2000{" "}
          </div>
        </div>
      </Card><Card
      className="card"
        hoverable
         style={{ width: 240, height: 400, marginBottom:"37px" }}
        cover={<img alt="example" src={Img} />}
      >
        <Meta title="[What happen] How to create" />
        <div className="bot">
          <div className="left">2000 won</div>
          <div className="right">
            <i class="fas fa-heart"></i> 2000{" "}
          </div>
        </div>
      </Card><Card
      className="card"
        hoverable
         style={{ width: 240, height: 400, marginBottom:"37px" }}
        cover={<img alt="example" src={Img} />}
      >
        <Meta title="[What happen] How to create" />
        <div className="bot">
          <div className="left">2000 won</div>
          <div className="right">
            <i class="fas fa-heart"></i> 2000{" "}
          </div>
        </div>
      </Card><Card
      className="card"
        hoverable
         style={{ width: 240, height: 400, marginBottom:"37px" }}
        cover={<img alt="example" src={Img} />}
      >
        <Meta title="[What happen] How to create" />
        <div className="bot">
          <div className="left">2000 won</div>
          <div className="right">
            <i class="fas fa-heart"></i> 2000{" "}
          </div>
        </div>
      </Card><Card
      className="card"
        hoverable
         style={{ width: 240, height: 400, marginBottom:"37px" }}
        cover={<img alt="example" src={Img} />}
      >
        <Meta title="[What happen] How to create" />
        <div className="bot">
          <div className="left">2000 won</div>
          <div className="right">
            <i class="fas fa-heart"></i> 2000{" "}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DirectoryItem;
