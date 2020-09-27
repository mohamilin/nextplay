import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Layout, Row, Col, Descriptions } from "antd";

import { useSelector, useDispatch } from 'react-redux';
import { getDetailsMovieAction } from '../redux/actions/movie.actions';

function DetailMovie() {
    const dispatch = useDispatch()
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDetailsMovieAction(id));
    }, []);

    const detailMovie = useSelector((state) => state.movie.data);

    console.log("component detail movie", detailMovie);


    return (
        <>
            <Layout className="layout">

                {detailMovie !== undefined ? (
                    <Row style={{ marginTop: 30 }}>
                        <Col style={{backgroundColor: '#ffffff'}} span={18} push={6}>
                            {/* <span style={{marginLeft: -900}}>
                        Title : {detailMovie.title} <br/>
                        </span>
                        <span style={{marginLeft: -900}}>
                        Rating : 
                        </span> */}
                            <Descriptions
                                style={{marginTop: 15}}
                                title= {`Description of ${detailMovie.title}`}
                                bordered
                                column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                            >
                                <Descriptions.Item label="Release Date"> {detailMovie.release_date} </Descriptions.Item>
                                <Descriptions.Item label="Status">{detailMovie.status}</Descriptions.Item>
                                <Descriptions.Item label="Duration">{detailMovie.runtime} </Descriptions.Item>
                                <Descriptions.Item label="Budget">{detailMovie.budget}</Descriptions.Item>
                                <Descriptions.Item label="Revenue">{detailMovie.revenue}</Descriptions.Item>
                                <Descriptions.Item label="Popularity">{detailMovie.popularity}</Descriptions.Item>
                                <Descriptions.Item label="Overview" style={{height: 170, width: 200}} >
                                    {detailMovie.overview}
                                </Descriptions.Item>
                            </Descriptions>

                        </Col>
                        <Col span={6} pull={18}> 
                            <img
                                src={`https://image.tmdb.org/t/p/w220_and_h330_face/${detailMovie.poster_path}`} alt=""

                            />

                        </Col>
                    </Row>

                ) : (
                        <p>Loading</p>
                    )
                }
            </Layout>
        </>
    )
}

export default DetailMovie
