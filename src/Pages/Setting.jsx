import React from 'react'
import '../styles/setting.css'
const Setting = () => {
  return (
    <div className='settings'>
      <div className="settings__wrapper">
        <h4 className="settings__title">Settings</h4>
        <div className="setting__top">
          <button className="settings_btn">My Detail</button>
          <button className="settings_btn">My Profile</button>
          <button className="settings_btn">Password</button>
          <button className="settings_btn">Email</button>
          <button className="settings_btn">Notification</button>
        </div>

        <div className="details__form">
          <h2 className="profile__title">Profile</h2>
          <p className='profile__desc'>Update your photo and personal detail</p>
          <form>
            <div className="form__group">
              <div>
                <label>Live in</label>
                <input type="text" placeholder='Peshawar, Pakistan' />
              </div>

              <div>
                <label>Street</label>
                <input type="text" placeholder='Gulbahar no 3 Qadirabad' />
              </div>
            </div>


            <div className="form__group">
              <div>
                <label>Email</label>
                <input type="text" placeholder='shahabhussain098123@gmail.com' />
              </div>

              <div>
                <label>Phone Number</label>
                <input type="number" placeholder='03427565103' />
              </div>
            </div>


            <div className="form__group">
              <div>
                <label>Date of Birth</label>
                <input type="text" placeholder='dd/mm/yyyy' />
              </div>

              <div>
                <label>Gender</label>
                <input type="text" placeholder='male' />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Your Photo</label>
                <p className='profile__img-desc'>This will displayed in your profile</p>
                <input type="file" placeholder='choose file' />
              </div>

             
               <div className="profile__img-btns">
                <button className="dlt__btn">Delete</button>
                <button className="update__btn">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Setting