import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/ducks/profile';
import { createHeaders } from '../../utils/methods';
import { Button } from '@material-ui/core';

const Profile = () => {

    const { slug } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(
        state => state.authentication.user
    );
    const state = useSelector(
        state => state.profile
    );
    const { user:targetUser, error} = state;
    const isUserProfile = user.username && (slug === user.username);
    
    const headers = createHeaders(user.token);

    useEffect(()=>{
        dispatch(getUser(slug, headers));
    },[]);
    
    return (
        <div>
            {
                (
                    targetUser &&
                    <div>
                        <div>
                            <div>
                                <img
                                    src={targetUser.profile.avatar}
                                    height='200'
                                    width='200'
                                    alt= '...'
                                />
                            </div>
                        </div>
                        <div>
                            <p>
                                {`Bio: ${targetUser.profile.about}`}
                            </p>
                            {
                                isUserProfile &&
                                <Button 
                                    href='/edit_profile'
                                    variant='contained'
                                    color='primary'>
                                    Edit Profile
                                </Button>
                            }
                            
                        </div>
                        <div>
                            <p>
                                {`Questions: ${targetUser.questions.length}`}
                            </p>
                        </div>
                    </div>
                ) || ( error &&
                    <div>{`No user found`}</div>
                )
            }   
        </div>
            
    );
}
 
export default Profile;
