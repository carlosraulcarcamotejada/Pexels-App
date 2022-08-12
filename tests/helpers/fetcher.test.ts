import fetcher from '../../src/helpers/fetcher';

describe('first', () => { 
    test('should first', () => { 


        const id = '7925859';
        const endPoint = `https://api.pexels.com/v1/photos/${id}`;

        // const photoInfo = fetcher(endPoint);
        // console.log({photoInfo})
        
        expect(id).toBe('7925859')

     })
 })