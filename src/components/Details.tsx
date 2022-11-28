import React from 'react';
import {Stack} from '@mui/material';

interface Props {
    id: number;
    visibility: boolean;
}

const Details:React.FC <Props>= ({id,visibility})=> {
    return (
       <>{visibility && <div className='details'>
            <Stack direction='column' justifyContent="space-around"
              alignItems="left"
              spacing={2}
              pl={1}
              pt={1}
              pr={2}
              pb={2}
              className="details-items"
              >
                <div><a href={`/user_details_page/${id}`} ><img src='/svg/user_icon.svg' alt='View details' className='imgs' />View Details</a></div>
                <div className= 'adj'><img src='/svg/user_logo.svg' alt='Backlist User' className='imgs' />Backlist User</div>
                <div><img src='/svg/delete_friend.svg' alt='Active User' className='imgs' />Active User</div>
            </Stack>
        </div>} </>
    )
}

export default Details;