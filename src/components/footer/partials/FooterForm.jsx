import { useState } from "react";
import {
	Box,
	Button,
	FormControl,
	OutlinedInput,
	Typography,
	useTheme,
} from "@mui/material";

const FooterForm = () => {
	const theme = useTheme();
	const [mail, setMail] = useState("");

	return (
		<Box>
			<Typography
				sx={{
					fontSize: "1.8rem",
					fontWeight: "bold",
					textAlign: "right",
					mb: "1rem",
					[theme.breakpoints.down("md")]: {
						textAlign: "center",
					},
				}}>
				Subscribe to our Newsletter
			</Typography>
			<Box
				component="form"
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "right",
					width: "600px",
					[theme.breakpoints.down("md")]: {
						justifyContent: "center",
					},
					[theme.breakpoints.down("sm")]: {
						display: "flex",
						flexDirection: "column",
					},
				}}>
				<FormControl variant="outlined">
					<OutlinedInput
						placeholder="Enter your email"
						color="black"
						value={mail}
						onChange={(e) => setMail(e.target.value)}
						size="small"
						sx={{
							[theme.breakpoints.down("sm")]: {
								marginBottom: "1rem",
							},
						}}
					/>
				</FormControl>
				<Button
					variant="outlined"
					color="black"
					sx={{
						height: "40px",
						ml: "1rem",
						fontWeight: 700,
					}}>
					Submit
				</Button>
			</Box>
		</Box>
	);
};

export default FooterForm;
