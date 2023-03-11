import { LogFileRepo } from './log.file.repo';
import fs from 'fs/promises';
jest.mock('fs/promises');

describe('Given a LogFileRepo class', () => {
  // Arrange
  const repo = new LogFileRepo();
  test('Then a new LogFileRepo() should be an instance of the class', () => {
    expect(repo).toBeInstanceOf(LogFileRepo);
  });

  describe('When query repo method is used to show all the records and the mocked log file is an empty array', () => {
    test('Then the query repo method should use fs.readFile an return an empty array', async () => {
      // Arrange
      (fs.readFile as jest.Mock).mockResolvedValue('[]');
      // Act
      const result = await repo.query();
      // Assert
      expect(fs.readFile).toHaveBeenCalled();
      expect(result).toEqual([]);
    });
  });

  describe('When create repo method, that uses fs.readFile and fs.writeFile, is used to add and show all the records, the mocked initial log file is an empty array and the added record is { log: "hi", date: "19000000 000000"}', () => {
    test('Then the create repo method should use fs.readFile and fs.writeFile and return the added record', async () => {
      (fs.readFile as jest.Mock).mockResolvedValue('[]');
      const record = { log: 'hi', date: '19000000 000000' };
      const result = await repo.create(record);
      expect(fs.readFile).toHaveBeenCalled();
      expect(fs.writeFile).toHaveBeenCalled();
      expect(result.log).toEqual('hi');
      expect(result.date).toEqual('19000000 000000');
    });
  });
});
