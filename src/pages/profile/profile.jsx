import '../../styles.scss/bootstrap.min.css';
import './profile.scss';
//IMAGES
import twitterIcon from '../../assets/images/twitter-logo.svg';
import homeImg from '../../assets/images/home-icon.svg';
import exploreImg from '../../assets/images/explore.svg';
import notificationImg from '../../assets/images/notification.svg';
import messagesImg from '../../assets/images/messages.svg';
import bookmarksImg from '../../assets/images/bookmarks.svg';
import listsImg from '../../assets/images/lists.svg';
import profileImg from '../../assets/images/profile.svg';
import moreImg from '../../assets/images/more.svg';
import locationImg from '../../assets/images/location.svg';
import groupImg from '../../assets/images/group.svg';
import bornImg from '../../assets/images/born.svg';
import calendarImg from '../../assets/images/calendar.svg';
import searchImg from '../../assets/images/search.svg';
import Img1 from '../../assets/images/img1.jpg';
import Img2 from '../../assets/images/img2.jpg';
import Img3 from '../../assets/images/img3.jpg';
import Img4 from '../../assets/images/img4.jpg';
import Img5 from '../../assets/images/img5.jpg';
import Img6 from '../../assets/images/img6.jpg';
import account1Img from '../../assets/images/qiz-bola.jpg';
import account2Img from '../../assets/images/Shuhrat-aka.jpg';
import { Link, Switch, Route } from 'react-router-dom';

function Profile() {

    return <> 
        <div className='container-xxl'>
            <div className='row'>
                <div className="col-2">
                    <div className='p-3 mt-1'>
                    <img src={twitterIcon} alt="twitter-icon" width='33' />
                    </div>
                    <ul className='menu list-unstyled ps-3 mt-4'>
                        <li className='menu__item'>
                            <Link to='/profile'>
                                <img src={homeImg} alt="home-icon" width='23' height='20' />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className='menu__item'>
                            <Link to='/profile/explore'>
                                <img src={exploreImg} alt="explore-icon" width='23' height='20' />
                                <span>Explore</span>
                            </Link>
                        </li>
                        <li className='menu__item'>
                            <Link to='/profile/notifications'>
                                <img src={notificationImg} alt="notification-icon" width='23' height='20' />
                                <span>Notifications</span>
                            </Link>
                        </li>
                        <li className='menu__item'>
                            <Link to='/profile/messages'>
                                <img src={messagesImg} alt="messages-icon" width='23' height='20' />
                                <span>Messages</span>
                            </Link>
                        </li>
                        <li className='menu__item'>
                            <Link to='/profile/bookmarks'>
                                <img src={bookmarksImg} alt="bookmarks-icon" width='23' height='20' />
                                <span>Bookmarks</span>
                            </Link>
                        </li>
                        <li className='menu__item'>
                            <Link to='/profile/lists'>
                                <img src={listsImg} alt="lists-icon" width='23' height='20' />
                                <span>Lists</span>
                            </Link>
                        </li>
                        <li className='menu__item'>
                            <Link to='/profile'>
                                <img src={profileImg} alt="profile-icon" width='23' height='20' />
                                <span>Profile</span>
                            </Link>
                        </li>
                        <li className='menu__item'>
                            <Link to='#'>
                                <img src={moreImg} alt="more-icon" width='23' height='20' />
                                <span>More</span>
                            </Link>
                        </li>
                    </ul>
                    <button className='left__button'>Tweet</button>
                </div>
                <div className="col-7 p-0">
                    <Switch>
                        <Route path="/profile" exact>
                            <div className='middle__header header'>
                                <span className='header__title'>Bobur</span>
                                <span className='header__info'>1,070 Tweets</span>
                            </div>
                            <div className='middle__title-wrap'>
                                {/* <h1>Bobur Mavlonov</h1> */}
                            </div>
                            <div className="middle__intro px-3">
                            <div className='text-end'>
                                <button className='intro__edit-btn'>Edit profile</button>
                            </div>
                            <span className='intro__title'>Bobur</span> <br />
                            <a className='intro__email' href="/">@bobur_mavlonov</a> <br />
                            <span className='intro__job'>UX&UI designer at <a href="/">@abutechuz</a></span>
                            <div className='w-100 d-flex justify-content-between my-3'>
                                <div>
                                    <img src={locationImg} alt="location-icon" />
                                    <span>Mashag’daman</span>
                                </div>
                                <div>
                                    <img src={groupImg} alt="group-icon" />
                                    <a className='text-decoration-none ms-2' href="/">t.me/boburjon_mavlonov</a>
                                </div>
                                <div>
                                    <img src={bornImg} alt="born-icon" />
                                    <span>Born November 24, 2000</span>
                                </div>
                                <div>
                                    <img src={calendarImg} alt="calendar-icon" />
                                    <span className='ms-1'>Joined May 2020</span>
                                </div>
                            </div>
                            <div>
                                <span className='intro__follow-info'>67<span className='opacity-50 ms-1'>Following</span></span>
                                <span className='intro__follow-info'>47<span className='opacity-50 ms-1'>Followers</span></span>
                            </div>
                            <div className='w-100 d-flex justify-content-around intro__menu mt-4 border-bottom pb-4'>
                                <a href="/">Tweets</a>
                                <a href="/">Tweets & replies</a>
                                <a href="/">Media</a>
                                <a href="/">Likes</a>
                            </div>
                            </div>
                        </Route>
                        <Route path='/profile/explore'>
                            <h1>Explore route</h1>
                        </Route>
                        <Route path={'/profile/lists'}><h1>Lists route</h1></Route>
                        <Route path={'/profile/bookmarks'}><h1>Bookmarks route</h1></Route>
                        <Route path={'/profile/messages'}><h1>Messages route</h1></Route>
                        <Route path={'/profile/notifications'}><h1>Notifications route</h1></Route>     
                    </Switch>
                </div>
                <div className="col-3">
                    <form className='py-3 d-flex align-content-center justify-content-center'>
                        <label className='search-label' htmlFor="input-search">
                            <img className='ms-1 mb-1' src={searchImg} alt="search-icon" width='18' />
                        </label>
                        <input className='search-input' type="search" name="search" id="input-search" placeholder='search twitter' />
                    </form>
                    <div className='w-100 right__images'>
                        <img src={Img1} alt="" width='100' />
                        <img src={Img2} alt="" width='100'/>
                        <img src={Img3} alt="" width='100'/>
                        <img src={Img4} alt="" width='100'/>
                        <img src={Img5} alt="" width='100'/>
                        <img src={Img6} alt="" width='100'/>
                    </div>
                    <div className='you-might-wrap mt-4 p-3'>
                        <span className='you-might-text'>You might like</span>
                        <div className='d-flex align-items-center justify-content-between'>
                            <img className='rounded-circle' src={account1Img} alt="" />
                            <div className='d-flex flex-column'>
                                <span >Mushtariy</span>
                                <span>@Mushtar5266</span>
                            </div>
                            <button className='rounded-pill px-3 py-1 text-white bg-dark' type='button'>Follow</button>
                        </div>
                        <div className='d-flex align-items-center justify-content-between mt-4'>
                            <img className='rounded-circle' src={account2Img} alt="d" />
                            <div className='d-flex flex-column'>
                                <span>Shuhratbek</span>
                                <span>@mrshukhrat</span>
                            </div>
                            <button className='rounded-pill px-3 py-1 text-white bg-dark' type='button'>Follow</button>
                        </div>
                        <a className='show-more' href="/">Show more</a>
                    </div>
                    <div className='trends-section mt-4 p-3'>
                        <span className='trends-title'>Trends for you</span>
                        <div className='d-flex  flex-column mt-3'>
                            <span className='h6 text-muted m-0'>Trending in Germany</span>
                            <span className='h5 m-0 my-1'>Revolution</span>
                            <span>50.4K Tweets</span>
                        </div>
                        <div className='d-flex  flex-column mt-3'>
                            <span className='h6 text-muted m-0'>Trending in Germany</span>
                            <span className='h5 m-0 my-1'>Revolution</span>
                            <span>50.4K Tweets</span>
                        </div>
                        <div className='d-flex  flex-column mt-3'>
                            <span className='h6 text-muted m-0'>Trending in Germany</span>
                            <span className='h5 m-0 my-1'>Revolution</span>
                            <span>50.4K Tweets</span>
                        </div>
                        <a className='show-more' href="/">Show more</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Profile;