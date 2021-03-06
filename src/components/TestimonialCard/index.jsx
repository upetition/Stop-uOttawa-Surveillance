import React from 'react';
import {
    Card,
    Typography,
    CardContent
} from '@material-ui/core';
import PropTypes from 'prop-types';

const TestimonialCard = ({name, comment, program, year}) => {
    const yearCanonicalVariant = {
        '1' : 'First year',
        '2' : 'Second year',
        '3' : 'Third year',
        '4' : 'Fourth year',
        '5' : 'Fifth+ year',
        'mst': 'Master\'s student of',
        'phd': 'Doctoral candidate of'
    }

    const commentDiv = <div dangerouslySetInnerHTML={{__html: comment}} />;

    return (
        <Card>
            <CardContent>
                <Typography variant="body1">
                    {commentDiv}
                </Typography>
                <Typography variant="body1" className="pt-3" color="textSecondary">
                    {`–`}&nbsp; {`${name}, ${yearCanonicalVariant[year]} ${program}`}
                </Typography>
            </CardContent>
        </Card>
    )
}

TestimonialCard.propTypes = {
    name: PropTypes.string,
    comment: PropTypes.string,
    program: PropTypes.string,
    year: PropTypes.string
}

export default TestimonialCard;
