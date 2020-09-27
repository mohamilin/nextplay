import React, { useEffect } from "react";

import { Layout, Row, Col, Card } from "antd";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMovieActionComingSoon } from "../redux/actions/movie.actions";

function ComingSoon() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getMovieActionComingSoon());
  }, [dispatch]);

  const listMovie = useSelector((state) => state.movie.data);
  console.log("movie", listMovie);

  const handleClick = (id) => {
    history.push(`detail-movie/${id}`);
  };

  const {Meta} = Card;



  return (

    <>

      <Layout className="layout">
        <Row gutter={[16, 16]}>

          {listMovie !== undefined && listMovie.length > 0 ? (
            listMovie.map((item, index) => (
              <div key={index}>
                <Col span={6}>
                  <Card
                    onClick={() => handleClick(item.id)}
                    hoverable
                    style={{ width: 180, height:370, marginTop: 40, marginLeft: 100 }}
                    cover={<img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${item.backdrop_path}`} alt="" />}
                  >
                    <div>
                    <Meta  title={item.title} />
                    <Meta title={`Rating : ${item.vote_average}`} />
                    <Meta title={`Date: ${item.release_date}`} />
                    {/* <Paragraph ellipsis>Date:{item.release_dat} </Paragraph> */}
                    </div>
                  </Card>
                </Col>
              </div>

            ))
          ) : (
              <p>loading</p>
            )}
        </Row>

      </Layout>
    </>
  );
}

export default ComingSoon;
