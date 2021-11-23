import { createStyles } from '@material-ui/core/styles';

export const styles = createStyles({
    courseGallery: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: 50,
        margin: 80,
        '@media (max-width: 768px)': {
            gridTemplateColumns: "repeat(2, 1fr)",
            margin: 40,
            gridGap: 40,
        },
        '@media (max-width: 420px)': {
            display: "block",
        },
    }
});