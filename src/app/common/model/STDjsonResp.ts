export class STDJsonResponse{
	header: Header;
	body: Body;
}

class Header{
	haserror : boolean;
	errorMessage: string;
	errorType: number;
	isLogged : boolean;
	messageContext: string[];
}

class Body{
	payload: any;
}
	