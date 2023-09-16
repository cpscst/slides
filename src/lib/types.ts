export type Question = {
	question: string;
	answers: string[];
};

export type AnswerStat = number[];

export type Problem = {
	name: string;
	problem: string;
	testFn: string;
	args: TestArgs;
	ret: TestRet;
};

export type TestRet = TestArg;

export type TestArg = (
	| {
			tag: 'number';
			tests: number[];
	  }
	| {
			tag: 'numberArray';
			tests: number[][];
	  }
	| {
			tag: 'numberArrayArray';
			tests: number[][][];
	  }
	| {
			tag: 'string';
			tests: string[];
	  }
	| {
			tag: 'stringArray';
			tests: string[][];
	  }
	| {
			tag: 'stringArrayArray';
			tests: string[][][];
	  }
	| {
			tag: 'boolean';
			tests: boolean[];
	  }
	| {
			tag: 'booleanArray';
			tests: boolean[][];
	  }
	| {
			tag: 'booleanArrayArray';
			tests: boolean[][][];
	  }
) & { name?: string };

export type TestArgs = TestArg[];

export type ResultSuccessState = {
	tag: 'success';
	time: number;
};

export type ResultFailureState = {
	tag: 'failure';
	reason: ResultFailureReason;
};

export type TimeoutFailureReason = {
	tag: 'timeout';
};

type ArrayElementType<T> = T extends (infer U)[] ? U : never;

export type WrongAnswerFailureReason = {
	tag: 'wrongAnswer';
	testCase: number;
	expected: ArrayElementType<TestRet['tests']>;
	actual: ArrayElementType<TestRet['tests']>;
};

export type ErrorFailureReason = {
	tag: 'error';
	message: string;
};

export type ResultFailureReason =
	| TimeoutFailureReason
	| WrongAnswerFailureReason
	| ErrorFailureReason;

export type ResultState = ResultSuccessState | ResultFailureState;

export type WrongAnswerFailureWorkerResultReason = WrongAnswerFailureReason;

export type ErrorFailureWorkerResultReason = ErrorFailureReason;

export type FailureWorkerResultReason =
	| WrongAnswerFailureWorkerResultReason
	| ErrorFailureWorkerResultReason;

export type FailureMessage = {
	tag: 'failure';
	reason: FailureWorkerResultReason;
};

export type SuccessMessage = {
	tag: 'success';
};

export type WorkerMessage = FailureMessage | SuccessMessage;

export type Stat = {
	number: number;
	unit: string;
	description?: string;
	big?: boolean;
};

export type Slide = {
	title: string;
	index: number;
	url: string;
};
