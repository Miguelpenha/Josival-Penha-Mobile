import IIncome from '../../../../types/income'

type IData = Omit<IIncome, '_id' | 'created' | 'valueRaw' | 'student'> & { student: string }